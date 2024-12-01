// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "morning-dispatch.firebaseapp.com",
  projectId: "morning-dispatch",
  storageBucket: "morning-dispatch.firebasestorage.app",
  messagingSenderId: "1096141984825",
  appId: "1:1096141984825:web:dc735f4b3232b7b23669e8",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
