import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./firebase";
import { Providers } from "./src/navigation/Providers";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default Providers;
