
import 'firebase/auth'; 
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAV5cvJBnmY5-HjM1M9F8bDuBtcUUm19pA",
  authDomain: "hell-3ffbd.firebaseapp.com",
  databaseURL: "https://hell-3ffbd.firebaseio.com",
  projectId: "hell-3ffbd",
  storageBucket: "hell-3ffbd.appspot.com",
  messagingSenderId: "204269549978",
  appId: "1:204269549978:web:b611af527130de82fc2223",
  measurementId: "G-C9YT2XLPYD"


});

const db = firebaseApp.firestore();


  export function updateDB(array, displayName){

    return db.collection('favs').doc(displayName).set({array})
    
  }

  export function LoginWithGoogle(){
      let provider = new firebase.auth.GoogleAuthProvider()
      return firebase.auth().signInWithPopup(provider)
      .then(snap => snap.user)
  }

  export function signOutGoogle(){
      firebase.auth().signOut()
  }

   