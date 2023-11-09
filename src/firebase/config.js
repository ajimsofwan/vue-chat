import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vueapp-3aa5a.firebaseapp.com",
  projectId: "vueapp-3aa5a",
  storageBucket: "vueapp-3aa5a.appspot.com",
  messagingSenderId: "422399122532",
  appId: "1:422399122532:web:f86ef9f96f91f67f3c9371",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, firestore, timestamp };
