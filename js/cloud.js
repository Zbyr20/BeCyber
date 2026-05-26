// ───────────────────────────────────────────────────────────
// Cloud storage (Firestore) — notlar ve ilerleme bulutta
// ───────────────────────────────────────────────────────────
// Yapı:
//   wikis/{certId__subId}     → { content, updatedAt }
//   progress/{certId}         → { done: { [subId]: true, ... } }
//
// Login yok: tüm ziyaretçiler aynı veriyi paylaşır.
// Açılışta tek seferde okur (cache), yazma anlık.
// ───────────────────────────────────────────────────────────

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getFirestore, collection, doc, getDoc, getDocs, setDoc, deleteField,
  query, where, updateDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Bellek içi cache — UI senkron çalışsın diye
const wikiCache = new Map();        // key: `${certId}__${subId}` → content
const wikiTsCache = new Map();      // key: aynı → updatedAt (ms)
const progressCache = new Map();    // key: certId → { [subId]: true }

function wkey(certId, subId) { return `${certId}__${subId}`; }

// ─── Önyükleme: bir cert için tüm wiki+progress'i çek ──────
export async function preloadCert(certId) {
  // Progress doc
  try {
    const pSnap = await getDoc(doc(db, "progress", certId));
    progressCache.set(certId, pSnap.exists() ? (pSnap.data().done || {}) : {});
  } catch (e) {
    console.warn("progress yüklenemedi:", e);
    progressCache.set(certId, {});
  }

  // Wiki dokümanları — bu cert'e ait olanları çek
  try {
    const q = query(
      collection(db, "wikis"),
      where("certId", "==", certId)
    );
    const snap = await getDocs(q);
    snap.forEach(d => {
      const data = d.data();
      wikiCache.set(d.id, data.content || "");
      if (data.updatedAt) {
        const ms = data.updatedAt.toMillis ? data.updatedAt.toMillis() : Date.parse(data.updatedAt);
        wikiTsCache.set(d.id, ms);
      }
    });
  } catch (e) {
    console.warn("wiki'ler yüklenemedi:", e);
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
  try {
    await updateDoc(doc(db, "progress", certId), {
      [`done.${subId}`]: deleteField()
    });
  } catch (e) { console.error("markUndone hata:", e); }
}
