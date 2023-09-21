// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDfzOtpbkkkXuwUltU1mHcA8nL-D1pwYqA",
  authDomain: "dnd-app-a1945.firebaseapp.com",
  projectId: "dnd-app-a1945",
  storageBucket: "dnd-app-a1945.appspot.com",
  messagingSenderId: "374216778199",
  appId: "1:374216778199:web:c4c11751d14d1beacc6b92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);