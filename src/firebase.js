
import 'firebase/auth'; 
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBVv39az9eBvJ9Ub7vaPtC_m6-kaGoaWLU",
  authDomain: "hello-1ef06.firebaseapp.com",
  databaseURL: "https://hello-1ef06.firebaseio.com",
  projectId: "hello-1ef06",
  storageBucket: "hello-1ef06.appspot.com",
  messagingSenderId: "734788172385",
  appId: "1:734788172385:web:8362bd96b913a551db4820",
  measurementId: "G-B1MVMRMXRQ"


});

const db = firebaseApp.firestore();

export default db;
  
  
  // .collection('favs')

  // export function updateDB(array, uid){

  //   return db.doc(uid).set({array})
    
  // }

  export function LoginWithGoogle(){
      let provider = new firebase.auth.GoogleAuthProvider()
      return firebase.auth().signInWithPopup(provider)
      .then(snap => snap.user)
  }

  export function signOutGoogle(){
      firebase.auth().signOut()
  }

   