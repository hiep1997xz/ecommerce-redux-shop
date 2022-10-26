import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBTr28PkViqZAUAVQcRp589HtAcYF58LpE",
  authDomain: "sell-ecommer.firebaseapp.com",
  projectId: "sell-ecommer",
  storageBucket: "sell-ecommer.appspot.com",
  messagingSenderId: "360228399442",
  appId: "1:360228399442:web:fe1bf46ce15d11a1c7328b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app;