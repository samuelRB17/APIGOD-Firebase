// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM5t8UWC9rwllZbsV1pfscw8G0RjqPXu0",
  authDomain: "apigot-d337f.firebaseapp.com",
  projectId: "apigot-d337f",
  storageBucket: "apigot-d337f.firebasestorage.app",
  messagingSenderId: "49285754372",
  appId: "1:49285754372:web:78ec68c53d72bd30a90f51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };