import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIGIp5pHD8dUtA-EPekXKx5H17kkUklCQ",
  authDomain: "femovate.firebaseapp.com",
  projectId: "femovate",
  storageBucket: "femovate.firebasestorage.app",
  messagingSenderId: "693764341000",
  appId: "1:693764341000:web:5936d761368d8542e880bd",
  measurementId: "G-5QB8G48YN9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);