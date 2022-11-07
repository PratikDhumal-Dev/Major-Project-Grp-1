// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEQAShULpIQDCzGLMyLw3GjfVjbji3dCE",
  authDomain: "e-commerce-shopping-app-cfaa0.firebaseapp.com",
  projectId: "e-commerce-shopping-app-cfaa0",
  storageBucket: "e-commerce-shopping-app-cfaa0.appspot.com",
  messagingSenderId: "469700681101",
  appId: "1:469700681101:web:84fcf5ab2a3be7ed53f1c4",
  measurementId: "G-TQ93J9WRNM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
