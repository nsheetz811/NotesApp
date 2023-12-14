import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyARhsebL9zGqKX1sDWu3LnVOVcxQqbZWsA",
  authDomain: "react-notes-31e6d.firebaseapp.com",
  projectId: "react-notes-31e6d",
  storageBucket: "react-notes-31e6d.appspot.com",
  messagingSenderId: "422115971433",
  appId: "1:422115971433:web:7ad2a6a325fcbbcc302df8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
