import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqkzY0drfri0E04PoxE_JYYbDg41LK56Y",
  authDomain: "galeartweb.firebaseapp.com",
  databaseURL: "",
  projectId: "galeartweb",
  storageBucket: "galeartweb.appspot.com",
  messagingSenderId: "1000816075745",
  appId: "1:1000816075745:web:25749f9a3899d82764a8a0",
  measurementId: "",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
