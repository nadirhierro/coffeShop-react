import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7WFNtFwoCPNyyMPMEDzCWm-Esf_2_1eI",
  authDomain: "sincopado-react.firebaseapp.com",
  projectId: "sincopado-react",
  storageBucket: "sincopado-react.appspot.com",
  messagingSenderId: "636069765341",
  appId: "1:636069765341:web:a4c8214c4956611cfbbb34",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
export { getFirestore };
