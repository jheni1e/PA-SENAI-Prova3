import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDD_Bv4xE8YdZ9dMTvbBHnBO_ZU-JCoYqg",
  authDomain: "fir-class-59479.firebaseapp.com",
  projectId: "fir-class-59479",
  storageBucket: "fir-class-59479.firebasestorage.app",
  messagingSenderId: "422928461472",
  appId: "1:422928461472:web:218350168c30287892a3c5",
  measurementId: "G-ZTNZKEVJJS"
};

export const app = initializeApp(firebaseConfig);

if (typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}

export const db = getFirestore(app)