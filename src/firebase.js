// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.apiKey,
  // authDomain: process.env.authDomain,
  // projectId: process.env.projectId,
  // storageBucket: process.env.storageBucket,
  // messagingSenderId: process.env.messagingSenderId,
  apiKey: "AIzaSyDuG2QmGx13EPJx0lrwzrYyaoKz6f-k7fE",
  authDomain: "chefguard-5ca00.firebaseapp.com",
  projectId: "chefguard-5ca00",
  storageBucket: "chefguard-5ca00.appspot.com",
  messagingSenderId: "1004208385751",
  appId: "1:1004208385751:web:3a25c14f509989e0c7ca92",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
