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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const creadtedAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                creadtedAt,
                ...additionalData
            })
        }   catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;