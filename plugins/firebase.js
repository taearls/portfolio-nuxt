import firebase from "firebase/app";
import "firebase/firestore";
if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "portfolio-4ad61.firebaseapp.com",
    databaseURL: "https://portfolio-4ad61.firebaseio.com",
    projectId: "portfolio-4ad61",
    storageBucket: "portfolio-4ad61.appspot.com",
    messagingSenderId: "471183768574",
    appId: "1:471183768574:web:800acc663349247d10deaf",
    measurementId: "G-7B0EHL8E03",
  };
  firebase.initializeApp(config);
}
const fireDb = firebase.firestore();
export { fireDb };