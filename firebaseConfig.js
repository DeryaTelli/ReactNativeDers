// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTsHHMtGLrDlDr9dGSPgQ2lG_AcdCFL2Y",
    authDomain: "test-app-bf137.firebaseapp.com",
    projectId: "test-app-bf137",
    storageBucket: "test-app-bf137.firebasestorage.app",
    messagingSenderId: "584401007423",
    appId: "1:584401007423:web:e984c4956fb2024999598a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;