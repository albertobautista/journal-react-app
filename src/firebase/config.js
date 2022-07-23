// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOKGCNvrwte-JNbLQFObiTClfkM8PInXU",
  authDomain: "journal-react-app-be1e2.firebaseapp.com",
  projectId: "journal-react-app-be1e2",
  storageBucket: "journal-react-app-be1e2.appspot.com",
  messagingSenderId: "504706774736",
  appId: "1:504706774736:web:01386dc52f91d92314d0d5",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

export const firebaseDB = getFirestore(firebaseApp);
