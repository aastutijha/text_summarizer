import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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