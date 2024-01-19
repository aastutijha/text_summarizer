import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
/*
const firebaseConfig = {
    apiKey: "AIzaSyB65pqITFlAXpYBjSDiGKF3Fmsql6tnRDY",
    authDomain: "text-summariser-4cfbb.firebaseapp.com",
    projectId: "text-summariser-4cfbb",
    storageBucket: "text-summariser-4cfbb.appspot.com",
    messagingSenderId: "57961024012",
    appId: "1:57961024012:web:2162a4745560c755273c29",
    measurementId: "G-63VFNTR6VC"
};*/
/*
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; *
*/
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6lV-JC_h3oVKMbHo9XR7vckaRWjuux1s",
    authDomain: "text-summarizer-f78de.firebaseapp.com",
    projectId: "text-summarizer-f78de",
    storageBucket: "text-summarizer-f78de.appspot.com",
    messagingSenderId: "379479098132",
    appId: "1:379479098132:web:bab9e3ea775312d5303801",
    measurementId: "G-ZMEY95WS7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);