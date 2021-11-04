import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAfYm30FqS2wpdvw7_w8tsU3vPD_pSBGc",
  authDomain: "netflix-clone-249d5.firebaseapp.com",
  projectId: "netflix-clone-249d5",
  storageBucket: "netflix-clone-249d5.appspot.com",
  messagingSenderId: "879429370361",
  appId: "1:879429370361:web:7ca161e7d2896af730bd28",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { signInWithGoogle, auth };
export default db;
