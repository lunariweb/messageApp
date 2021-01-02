import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnVQIRZA9VLuwaWhf9BUda3Ql9jUFVhVY",
    authDomain: "imessage-clone-yt-24057.firebaseapp.com",
    projectId: "imessage-clone-yt-24057",
    storageBucket: "imessage-clone-yt-24057.appspot.com",
    messagingSenderId: "215392006834",
    appId: "1:215392006834:web:aa1bdcc285d5959381cfab",
    measurementId: "G-Y3K9ETVNTC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
  