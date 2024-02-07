// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRuHCEdoDlm_8LsGuYjHuEEQOEph6yt4o",
  authDomain: "pokedex-95b54.firebaseapp.com",
  projectId: "pokedex-95b54",
  storageBucket: "pokedex-95b54.appspot.com",
  messagingSenderId: "989372461937",
  appId: "1:989372461937:web:e4cdaa09e462e5398bfcd0"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)