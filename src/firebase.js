import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD34EzSIBYX3Vd1Q7BsOZklTGvUaSMH_aE",
    authDomain: "clone-3b021.firebaseapp.com",
    databaseURL: "https://clone-3b021.firebaseio.com",
    projectId: "clone-3b021",
    storageBucket: "clone-3b021.appspot.com",
    messagingSenderId: "577266696194",
    appId: "1:577266696194:web:38342441fe31ce6112e71b",
    measurementId: "G-8RYL7NZGQE"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };