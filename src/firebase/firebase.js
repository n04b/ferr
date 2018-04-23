import * as firebase from "firebase";

const config = firebase.initializeApp({
  apiKey: "AIzaSyCPKDM2CdyB2W5sbuYvpCAhEVfN418lpkc",
  authDomain: "ferr-d4176.firebaseapp.com",
  databaseURL: "https://ferr-d4176.firebaseio.com",
  projectId: "ferr-d4176",
  storageBucket: "ferr-d4176.appspot.com",
  messagingSenderId: "116813139923"
});

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };