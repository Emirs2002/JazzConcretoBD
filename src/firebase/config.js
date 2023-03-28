import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIwY9ZN6aDu37tY7TtkyT5x8SzwU5YqEo",
  authDomain: "jazz-concreto.firebaseapp.com",
  projectId: "jazz-concreto",
  storageBucket: "jazz-concreto.appspot.com",
  messagingSenderId: "1038910263491",
  appId: "1:1038910263491:web:7c9c7c95f4de088855d276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);  //conexion con el modulo de autenticacion de firebase
export const db= getFirestore(app);  //conexion con el modulo de base de datos de firebase
export const store= getStorage(app);  //conexion con el modulo de Storage de firebase

export const googleProvider= new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:"select_account"});