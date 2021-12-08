import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCSnv9P-87dmsmwx_Pc6mKVtYowB4Jux8o",
    authDomain: "reactnewproject-c8ebb.firebaseapp.com",
    projectId: "reactnewproject-c8ebb",
    storageBucket: "reactnewproject-c8ebb.appspot.com",
    messagingSenderId: "24854259447",
    appId: "1:24854259447:web:a47de9e40aabf8cda9d5f2"
  };

 firebase.initializeApp(firebaseConfig);
 var database = firebase.database();
 export default database;