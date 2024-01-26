// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1_UHpLIUSeYYXAOYNQZZCjlqcjQgTIv8",
    authDomain: "library-management-c0a7b.firebaseapp.com",
    projectId: "library-management-c0a7b",
    storageBucket: "library-management-c0a7b.appspot.com",
    messagingSenderId: "436152565039",
    appId: "1:436152565039:web:d6d1be53c214a6f698b5da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;