// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBh9aYZRxjdQUlnV7cZmcVIWXjBR0_Kmxs",
    authDomain: "netflix-2d9d3.firebaseapp.com",
    projectId: "netflix-2d9d3",
    storageBucket: "netflix-2d9d3.appspot.com",
    messagingSenderId: "693080535063",
    appId: "1:693080535063:web:07d44fd44d9f168563ec52"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;