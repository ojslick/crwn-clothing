import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDm4IkbRHiT0VnkwHmR1cF9V-0Xq7JT0rE",
    authDomain: "crwn-db-27b7b.firebaseapp.com",
    databaseURL: "https://crwn-db-27b7b.firebaseio.com",
    projectId: "crwn-db-27b7b",
    storageBucket: "crwn-db-27b7b.appspot.com",
    messagingSenderId: "1058235549561",
    appId: "1:1058235549561:web:146601af656f7d44db11a8",
    measurementId: "G-49T0TD14B2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;