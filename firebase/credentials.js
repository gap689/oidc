// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV_zh7HyII2DPquAA3A9oZvyIqWN50Cq4",
  authDomain: "oidc-aa430.firebaseapp.com",
  projectId: "oidc-aa430",
  storageBucket: "oidc-aa430.appspot.com",
  messagingSenderId: "955965246608",
  appId: "1:955965246608:web:27b78bb5ece225863e9c15"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

