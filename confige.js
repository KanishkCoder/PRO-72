import * as firebase from 'firebase';
require('@firebase/firebase')

const firebaseConfig = {
    apiKey: "AIzaSyDpvfIubXGmhGIsYbi2oltPT_F5np35IBE",
    authDomain: "storyhub-d605d.firebaseapp.com",
    projectId: "storyhub-d605d",
    storageBucket: "storyhub-d605d.appspot.com",
    messagingSenderId: "129870683903",
    appId: "1:129870683903:web:49f8ba1111a7a8a4f0b6ca"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore();