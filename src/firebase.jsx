import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyABTOxlGaeCeytGEOvuf3pTpwyF_ecGuxM",
  authDomain: "trinity-f87f0.firebaseapp.com",
  projectId: "trinity-f87f0",
  storageBucket: "trinity-f87f0.appspot.com",
  messagingSenderId: "123131196317",
  appId: "1:123131196317:web:03f227fd0939f8a1247574",
  measurementId: "G-NQCP8N2LR9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { db };