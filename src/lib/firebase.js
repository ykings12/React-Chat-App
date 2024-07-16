import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-71025.firebaseapp.com",
  projectId: "react-chat-71025",
  storageBucket: "react-chat-71025.appspot.com",
  messagingSenderId: "84053464624",
  appId: "1:84053464624:web:7c4df54f3fcc03df3cfff5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore();
export const storage = getStorage();