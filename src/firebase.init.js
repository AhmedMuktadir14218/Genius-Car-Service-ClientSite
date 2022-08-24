// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu3GfOcimcwcNwCOcZTAtausxAUrFysuw",
  authDomain: "genius-car-3e659.firebaseapp.com",
  projectId: "genius-car-3e659",
  storageBucket: "genius-car-3e659.appspot.com",
  messagingSenderId: "972353588977",
  appId: "1:972353588977:web:322f8556cfe7292a94e350"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
