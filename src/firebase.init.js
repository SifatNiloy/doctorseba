// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJZ88bcih71EMi2rD-LLz-3x8kYo6X32Q",
    authDomain: "doctorseba-d9db3.firebaseapp.com",
    projectId: "doctorseba-d9db3",
    storageBucket: "doctorseba-d9db3.appspot.com",
    messagingSenderId: "413880873529",
    appId: "1:413880873529:web:951fee2ab6b73c6d2413e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;