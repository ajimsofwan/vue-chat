import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD17FxGPjE4ONHyA-ZIRyJCtEvFsCvShDk",
  authDomain: "vueapp-3aa5a.firebaseapp.com",
  projectId: "vueapp-3aa5a",
  storageBucket: "vueapp-3aa5a.appspot.com",
  messagingSenderId: "422399122532",
  appId: "1:422399122532:web:f86ef9f96f91f67f3c9371",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore;
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firestore, timestamp };
