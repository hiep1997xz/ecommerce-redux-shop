import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMlV1tp3u85ZHmKw-s_B4AGRBZ2xHcOlE",
  authDomain: "cell-ecommer-redux.firebaseapp.com",
  projectId: "cell-ecommer-redux",
  storageBucket: "cell-ecommer-redux.appspot.com",
  messagingSenderId: "85346323637",
  appId: "1:85346323637:web:dcebe30bfc7758467b42fc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;