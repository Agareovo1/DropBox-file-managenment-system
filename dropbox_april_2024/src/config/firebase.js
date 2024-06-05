import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDlxuwkKW2bXz16abjx5RaSotRFzTIaBSo",
    authDomain: "file-82757.firebaseapp.com",
    projectId: "file-82757",
    storageBucket: "file-82757.appspot.com",
    messagingSenderId: "199974593618",
    appId: "1:199974593618:web:31c4ad93d99ade99feab8b"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire;