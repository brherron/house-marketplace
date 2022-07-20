// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQfiyNOYxPIjHtYrPdr7KeJW-24Eflz6A",
  authDomain: "house-marketplace-app-7cba1.firebaseapp.com",
  projectId: "house-marketplace-app-7cba1",
  storageBucket: "house-marketplace-app-7cba1.appspot.com",
  messagingSenderId: "765654052036",
  appId: "1:765654052036:web:4a4cc9a151488a36cc6d91"
};

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()