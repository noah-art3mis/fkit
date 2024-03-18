// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCl6c4gc3Q0PYzeHxbjjOwIYnaGLJPSKeI',
    authDomain: 'fkit-735d1.firebaseapp.com',
    projectId: 'fkit-735d1',
    storageBucket: 'fkit-735d1.appspot.com',
    messagingSenderId: '539068807986',
    appId: '1:539068807986:web:7af72da450b6cb435a352b',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
