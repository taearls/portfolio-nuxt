import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  const config = {
    apiKey: process.env["FIREBASE_API_KEY"],
    appId: process.env["FIREBASE_APP_ID"],
    authDomain: process.env["FIREBASE_AUTH_DOMAIN"],
    databaseURL: process.env["FIREBASE_DB_URL"],
    measurementId: process.env["FIREBASE_MEASUREMENT_ID"],
    messagingSenderId: process.env["FIREBASE_MESSAGING_SENDER_ID"],
    projectId: process.env["FIREBASE_PROJECT_ID"],
    storageBucket: process.env["FIREBASE_STORAGE_BUCKET"],
  };
  firebase.initializeApp(config);
}
export const fireStore = firebase.firestore();
