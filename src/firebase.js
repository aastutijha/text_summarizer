import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB65pqITFlAXpYBjSDiGKF3Fmsql6tnRDY",
  authDomain: "text-summariser-4cfbb.firebaseapp.com",
  projectId: "text-summariser-4cfbb",
  storageBucket: "text-summariser-4cfbb.appspot.com",
  messagingSenderId: "57961024012",
  appId: "1:57961024012:web:2162a4745560c755273c29",
  measurementId: "G-63VFNTR6VC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
