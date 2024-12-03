// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAssPIXTGrz-e2YYVn26Rh-BPc75LIHuAY",
  authDomain: "coffee-store-d75a2.firebaseapp.com",
  projectId: "coffee-store-d75a2",
  storageBucket: "coffee-store-d75a2.firebasestorage.app",
  messagingSenderId: "701105615747",
  appId: "1:701105615747:web:8b8e4f37b4a9d475e6bcb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
