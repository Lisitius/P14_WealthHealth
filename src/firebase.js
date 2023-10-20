import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZIlNJ3AsNiVogRZREtCHdVXeI3T0HKNk",
  authDomain: "wealth-health-70654.firebaseapp.com",
  projectId: "wealth-health-70654",
  storageBucket: "wealth-health-70654.appspot.com",
  messagingSenderId: "955547051250",
  appId: "1:955547051250:web:fe41ef35b67e8cc11b5c6b",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
