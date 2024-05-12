// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHLas4LMUiOYhYEfO5mI_ki1uAt_Ls3fc",
  authDomain: "medicare-webapp.firebaseapp.com",
  projectId: "medicare-webapp",
  storageBucket: "medicare-webapp.appspot.com",
  messagingSenderId: "307052771056",
  appId: "1:307052771056:web:4664acc29be2902ccd7435",
  measurementId: "G-FQPBDHHHGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app, "gs://medicare-webapp.appspot.com");