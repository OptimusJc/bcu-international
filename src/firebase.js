import firebase from "firebase";

const firebaseConfig =firebase.initializeApp({
    apiKey: "AIzaSyDda6qD1ywP7XdaahRqPfPjYFSf2NU0GLE",
    authDomain: "universelondon-1fb43.firebaseapp.com",
    projectId: "universelondon-1fb43",
    storageBucket: "universelondon-1fb43.appspot.com",
    messagingSenderId: "513503751800",
    appId: "1:513503751800:web:89a64d84499b6bb976478d",
    measurementId: "G-22M0TX7NDS"
  });

const db=firebaseConfig.firestore();

export default db;