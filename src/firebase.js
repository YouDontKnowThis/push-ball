import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBBIC9Y4GMSASUOUKPbi0OdTNMgf1Ml7wM",
  authDomain: "bk-push-ball.firebaseapp.com",
  databaseURL: "https://bk-push-ball.firebaseio.com",
  projectId: "bk-push-ball",
  storageBucket: "bk-push-ball.appspot.com",
  messagingSenderId: "584271819495",
  appId: "1:584271819495:web:2bd1736bf756e651182842",
  measurementId: "G-ENKNTW4YP4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const dtb = firebaseApp.firestore();
