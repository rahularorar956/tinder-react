import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAqUrRJ9sM8eb2Zy9F65fajNa6x84pWqTw",
  authDomain: "tinder-react1.firebaseapp.com",
  databaseURL: "https://tinder-react1.firebaseio.com",
  projectId: "tinder-react1",
  storageBucket: "tinder-react1.appspot.com",
  messagingSenderId: "1001545545602",
  appId: "1:1001545545602:web:428ea9693d610b43c3019b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
