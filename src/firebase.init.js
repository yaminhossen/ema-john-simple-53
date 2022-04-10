// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqIFDTsVxMZTz86LkRyAmu0tFUdSuUEWw",
    authDomain: "ema-john-simple-53.firebaseapp.com",
    projectId: "ema-john-simple-53",
    storageBucket: "ema-john-simple-53.appspot.com",
    messagingSenderId: "160750582886",
    appId: "1:160750582886:web:9ee01acd062feb52b141a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;