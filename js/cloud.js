// ───────────────────────────────────────────────────────────
// Cloud storage (Firestore) — notlar ve ilerleme bulutta
// ───────────────────────────────────────────────────────────
// Yapı:
//   wikis/{certId__subId}     → { content, updatedAt }
//   progress/{certId}         → { done: { [subId]: true, ... } }
//
// Login yok: tüm ziyaretçiler aynı veriyi paylaşır.
// Çevrimdışı / geçersiz config → localStorage fallback.
// Her Firebase çağrısı max 4 saniye bekler, sonra çıkar.
// ───────────────────────────────────────────────────────────

import { initializeApp }  from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getFirestore, collection, doc, getDoc, getDocs, setDoc, deleteField,
  query, where, updateDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// Bellek içi cache — UI senkron çalışsın diye
const wikiCache     = new Map();   // key: `${certId}__${subId}` → content
const wikiTsCache   = new Map();   // key: aynı → updatedAt (ms)
const progressCache = new Map();   // key: certId → { [subId]: true }

function wkey(certId, subId) { return `${certId}__${subId}`; }

// ─── Timeout: Firebase askıda kalırsa çıkış ────────────────
function withTimeout(promise, ms = 4000) {
  let t;
  const timer = new Promise((_, reject) => {
    t = setTimeout(() => reject(new Error('timeout')), ms);
  });
  return Promise.race([promise, timer]).finally(() => clearTimeout(t));
}

// ─── localStorage yardımcıları — anlık fallback ────────────
function lsKey(certId) { return `progress_${certId}`; }

function saveProgressLocal(certId, done) {
  try { localStorage.setItem(lsKey(certId), JSON.stringify(done)); } catch {}
}

function loadProgressLocal(certId) {
  try { return JSON.parse(localStorage.getItem(lsKey(certId)) || '{}'); }
  catch { return {}; }
}

// ─── Önyükleme: bir cert için tüm wiki + progress'i çek ────
export async function preloadCert(certId) {
  // Progress — hata/timeout durumunda localStorage'a dön
  try {
    const pSnap = await withTimeout(getDoc(doc(db, "progress", certId)));
    const done  = pSnap.exists() ? (pSnap.data().done || {}) : {};
    progressCache.set(certId, done);
    saveProgressLocal(certId, done);    // index.html için de sync'le
  } catch (e) {
    console.warn("progress yüklenemedi:", e.message);
    progressCache.set(certId, loadProgressLocal(certId));
  }

  // Wiki dokümanları — bu cert'e ait tüm notları çek
  try {
    const q    = query(collection(db, "wikis"), where("certId", "==", certId));
    const snap = await withTimeout(getDocs(q));
    snap.forEach(d => {
      const data = d.data();
      wikiCache.set(d.id, data.content || "");
      if (data.updatedAt) {
        const ms = data.updatedAt.toMillis
          ? data.updatedAt.toMillis()
          : Date.parse(data.updatedAt);
        wikiTsCache.set(d.id, ms);
      }
    });
  } catch (e) {
    console.warn("wiki'ler yüklenemedi:", e.message);
  }
}

// ─── Wiki (notlar) ─────────────────────────────────────────
export function loadWiki(certId, subId) {
  return wikiCache.get(wkey(certId, subId)) || "";
}

export function getLastSavedTs(certId, subId) {
  return wikiTsCache.get(wkey(certId, subId)) || null;
}

export async function saveWiki(certId, subId, content) {
  const k = wkey(certId, subId);
  wikiCache.set(k, content);
  wikiTsCache.set(k, Date.now());
  try {
    await setDoc(doc(db, "wikis", k), {
      certId, subId, content,
      updatedAt: serverTimestamp()
    }, { merge: true });
    return true;
  } catch (e) {
    console.error("saveWiki hata:", e);
    return false;
  }
}

// ─── İlerleme ──────────────────────────────────────────────
export function getProgress(certId) {
  return progressCache.get(certId) || {};
}

export async function markDoneCloud(certId, subId) {
  const p = progressCache.get(certId) || {};
  p[subId] = true;
  progressCache.set(certId, p);
  saveProgressLocal(certId, p);              // anında localStorage'a yaz
  try {
    await setDoc(doc(db, "progress", certId), {
      done: { [subId]: true }
    }, { merge: true });
  } catch (e) { console.error("markDone hata:", e); }
}

export async function markUndoneCloud(certId, subId) {
  const p = progressCache.get(certId) || {};
  delete p[subId];
  progressCache.set(certId, p);
  saveProgressLocal(certId, p);              // anında localStorage'a yaz
  try {
    await updateDoc(doc(db, "progress", certId), {
      [`done.${subId}`]: deleteField()
    });
  } catch (e) { console.error("markUndone hata:", e); }
}
