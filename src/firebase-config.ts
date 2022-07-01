import { initializeApp } from "firebase/app";

const API_KEY = process.env.REACT_APP_BASE_URL;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "luciddreamers-433c9.firebaseapp.com",
  projectId: "luciddreamers-433c9",
  storageBucket: "luciddreamers-433c9.appspot.com",
  messagingSenderId: "484504698414",
  appId: "1:484504698414:web:02d64844b5a16ef63429bf",
  measurementId: "G-95395KMR15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);