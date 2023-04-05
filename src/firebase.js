import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_uekar0bVLPxr9xgBTagIFMFhanCagR8",
  authDomain: "proyecto-final-react-84bd7.firebaseapp.com",
  databaseURL: "https://proyecto-final-react-84bd7-default-rtdb.firebaseio.com",
  projectId: "proyecto-final-react-84bd7",
  storageBucket: "proyecto-final-react-84bd7.appspot.com",
  messagingSenderId: "303796144629",
  appId: "1:303796144629:web:13c6f9360beb22aa48f8bc"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
getDatabase(appFirebase);
