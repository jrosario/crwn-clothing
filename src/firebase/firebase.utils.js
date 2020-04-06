import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDV6pgT4C9C-bJIXlYWacoqf9xxAtHQFLs",
    authDomain: "crwn-db-16dac.firebaseapp.com",
    databaseURL: "https://crwn-db-16dac.firebaseio.com",
    projectId: "crwn-db-16dac",
    storageBucket: "crwn-db-16dac.appspot.com",
    messagingSenderId: "794205690300",
    appId: "1:794205690300:web:fce4ec4f825a1be162b3b9",
    measurementId: "G-DTQ5HC26GZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;