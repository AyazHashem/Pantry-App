// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLWGnSi6bzWjh7CuUBs8E-X0CAFqncZb8",
  authDomain: "pantry-app-5e1cc.firebaseapp.com",
  projectId: "pantry-app-5e1cc",
  storageBucket: "pantry-app-5e1cc.appspot.com",
  messagingSenderId: "660945131621",
  appId: "1:660945131621:web:bdcad907cac1fce1648e8c",
  measurementId: "G-9W0GHQRGE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};