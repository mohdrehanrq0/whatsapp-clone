import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdEEgCg2HCeI9yqHVJq7tc3ZrleUirsdg",
    authDomain: "whatsapp-clone-786.firebaseapp.com",
    projectId: "whatsapp-clone-786",
    storageBucket: "whatsapp-clone-786.appspot.com",
    messagingSenderId: "973313754192",
    appId: "1:973313754192:web:32b37b234c494c0281bd55",
    measurementId: "G-B9PL4JTCRZ"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db