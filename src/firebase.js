// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUP6fZlCGVnxcD6XXkwzf6m4am5pTPVQg",
  authDomain: "todo-3293a.firebaseapp.com",
  projectId: "todo-3293a",
  storageBucket: "todo-3293a.appspot.com",
  messagingSenderId: "665311302548",
  appId: "1:665311302548:web:fad6a4feb377dd83bb3581",
  measurementId: "G-PQ5ZB20CB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);