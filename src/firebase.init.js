// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlFGa0F5b8HSORxX6144AO477T0JvXgOw",
  authDomain: "ema-john-simple-e32f0.firebaseapp.com",
  projectId: "ema-john-simple-e32f0",
  storageBucket: "ema-john-simple-e32f0.appspot.com",
  messagingSenderId: "812043992465",
  appId: "1:812043992465:web:deef92ae96dd5732b0ae30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;