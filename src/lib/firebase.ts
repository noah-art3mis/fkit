// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";
import { type User } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl6c4gc3Q0PYzeHxbjjOwIYnaGLJPSKeI",
  authDomain: "fkit-735d1.firebaseapp.com",
  projectId: "fkit-735d1",
  storageBucket: "fkit-735d1.appspot.com",
  messagingSenderId: "539068807986",
  appId: "1:539068807986:web:7af72da450b6cb435a352b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

//user store
export const user = writable<User | null>(null);

onAuthStateChanged(auth, (_user) => {
  user.set(_user); 
  console.log(_user);
});
