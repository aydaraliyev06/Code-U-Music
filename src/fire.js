import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDwot27J8ncdyivkRI9cXB072ZbagK8oS4",
    authDomain: "code-u-music.firebaseapp.com",
    projectId: "code-u-music",
    storageBucket: "code-u-music.appspot.com",
    messagingSenderId: "956400998941",
    appId: "1:956400998941:web:d15c35d1197599c70604f4",
    measurementId: "G-E35QTHMG3B"
  };

  const fire = firebase.initializeApp(firebaseConfig)
  export default fire;