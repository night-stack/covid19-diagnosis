import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const clientCredentials = {
  apiKey: "AIzaSyCtwCBzgtq2XwqnhLTtk603YAXubfq6OuE",
  authDomain: "covid19-c52db.firebaseapp.com",
  projectId: "covid19-c52db",
  storageBucket: "covid19-c52db.appspot.com",
  messagingSenderId: "1006810310602",
  appId: "1:1006810310602:web:58c883e3b7d34c141a5133",
  measurementId: "G-YXBCS7PXMT",
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
