// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

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
const auth =initializeAuth(app,{
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);

export default app;