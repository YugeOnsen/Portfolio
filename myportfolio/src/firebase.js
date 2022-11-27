// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU5rEtvWOZFR08x9wCeuzUVU_jqOVtLZo",
  authDomain: "myportfolio-81f72.firebaseapp.com",
  projectId: "myportfolio-81f72",
  storageBucket: "myportfolio-81f72.appspot.com",
  messagingSenderId: "720021295707",
  appId: "1:720021295707:web:5e3cf3f156c4d1d061a57e",
  measurementId: "G-GWJDTLMEVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);