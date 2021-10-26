// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4E0-0vFLA9l_-GzD3Q8kFxuUit9o6YmM",
    authDomain: "inda-1d3af.firebaseapp.com",
    projectId: "inda-1d3af",
    storageBucket: "inda-1d3af.appspot.com",
    messagingSenderId: "760731171210",
    appId: "1:760731171210:web:917f355ed5489669853073",
    measurementId: "G-M9XXP5SNLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore()