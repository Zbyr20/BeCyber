// ───────────────────────────────────────────────────────────
// Firebase yapılandırması
// ───────────────────────────────────────────────────────────
// 1) https://console.firebase.google.com adresine git, yeni proje aç
// 2) Build > Firestore Database > Create database (test mode ile başla)
// 3) Project settings (⚙) > General > "Your apps" altında Web app ekle
// 4) Sana verilen firebaseConfig objesini aşağıya yapıştır
// 5) Firestore Rules'u (kurallar) aşağıdaki gibi yap (login yok, herkes okuyup yazabilir):
//
//    rules_version = '2';
//    service cloud.firestore {
//      match /databases/{database}/documents {
//        match /{document=**} {
//          allow read, write: if true;
//        }
//      }
//    }
//
//    NOT: Bu kurallar herkese açık. Production için Firebase App Check
//    veya bir auth katmanı eklemen önerilir.
// ───────────────────────────────────────────────────────────

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA0D_2AA8uZK81Qk9FnSR7iwCx-E43h24",
  authDomain: "becyber-df37a.firebaseapp.com",
  projectId: "becyber-df37a",
  storageBucket: "becyber-df37a.firebasestorage.app",
  messagingSenderId: "590837675054",
  appId: "1:590837675054:web:e537ac39ddb952b28a9bbf",
  measurementId: "G-07TVG1JM9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);