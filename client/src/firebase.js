// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hope-blog-6f8ab.firebaseapp.com",
  projectId: "hope-blog-6f8ab",
  storageBucket: "hope-blog-6f8ab.appspot.com",
  messagingSenderId: "607220103404",
  appId: "1:607220103404:web:a9c8e451e5bfbfe1130dc9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);