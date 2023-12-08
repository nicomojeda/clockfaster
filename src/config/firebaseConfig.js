import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiYfpBAhi0LkAqyCNw4NAbfsYaEWnYrYo",
  authDomain: "universocine-14af1.firebaseapp.com",
  projectId: "universocine-14af1",
  storageBucket: "universocine-14af1.appspot.com",
  messagingSenderId: "497863355581",
  appId: "1:497863355581:web:59ffd89525f7aa49a49bd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = 