// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDmNTtKqZQaYserER_ZOEd1W6MiFmsW84",
  authDomain: "terrapet-ecommerce.firebaseapp.com",
  projectId: "terrapet-ecommerce",
  storageBucket: "terrapet-ecommerce.appspot.com",
  messagingSenderId: "75157605036",
  appId: "1:75157605036:web:86364f8ea2cfb0daf4ad09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

