import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCEj4GN8jwYutldfjFNyI4PJm9CecFdRTw",
    authDomain: "dropbox-clone-9d9fc.firebaseapp.com",
    projectId: "dropbox-clone-9d9fc",
    storageBucket: "dropbox-clone-9d9fc.appspot.com",
    messagingSenderId: "667427425693",
    appId: "1:667427425693:web:dbc1aea541c2afdf1af374"
  };

  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

  const db = getFirestore(app);
  const storage = getStorage(app);

  export {db, storage};