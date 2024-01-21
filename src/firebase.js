import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgsMZBqFix5yMeQyH8jRGBSurcrYnwhjY",
  authDomain: "hotstar-clone-27756.firebaseapp.com",
  projectId: "hotstar-clone-27756",
  storageBucket: "hotstar-clone-27756.appspot.com",
  messagingSenderId: "46620005466",
  appId: "1:46620005466:web:a0ccf0b8e4f28ecbc47463"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);