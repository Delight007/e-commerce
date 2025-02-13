// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  initializeFirestore,
  persistentLocalCache,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAChUgy1Yhm2JQqXBusukCdgNk9FUShswI",
  authDomain: "e-commerce-40555.firebaseapp.com",
  projectId: "e-commerce-40555",
  storageBucket: "e-commerce-40555.firebasestorage.app",
  messagingSenderId: "453849871048",
  appId: "1:453849871048:web:85182bb2d1e79a0a04ebfd",
  measurementId: "G-X0BSHRNSJ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
const db = getFirestore(app);
export { db };
