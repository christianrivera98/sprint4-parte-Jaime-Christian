// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOmtqtJklq49uqEpf70zPD3mSBxxs6qyQ",
  authDomain: "foodapp-10c4c.firebaseapp.com",
  projectId: "foodapp-10c4c",
  storageBucket: "foodapp-10c4c.appspot.com",
  messagingSenderId: "1048976861263",
  appId: "1:1048976861263:web:cfcff13d4ec7881970a23a"
};

// Initialize Firebase
export  const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore (FirebaseApp);