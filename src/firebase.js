// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABT8cuAYL9-VKT2aWn9cQbh37U8s_fKIM",
  authDomain: "react-back-end-52a6c.firebaseapp.com",
  projectId: "react-back-end-52a6c",
  storageBucket: "react-back-end-52a6c.appspot.com",
  messagingSenderId: "710640129044",
  appId: "1:710640129044:web:9077cadbd218c33663c301"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)