import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBbTiEEaGTbAe5O79gwVg2cAwrj9hJBgfE",
  authDomain: "khan-khaba.firebaseapp.com",
  projectId: "khan-khaba",
  storageBucket: "khan-khaba.appspot.com",
  messagingSenderId: "848556442457",
  appId: "1:848556442457:web:70b22612b8b79d4f000248",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const roomCollection = collection(db, "rooms")
