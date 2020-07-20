const firebase = require("firebase/app");
require("firebase/firestore");

const fsConfig = {
  apiKey: "AIzaSyBfhVyBK2b521UjbbBfEqASPiIEUzpDZcE",
  authDomain: "file-memo-543ba.firebaseapp.com",
  databaseURL: "https://file-memo-543ba.firebaseio.com",
  projectId: "file-memo-543ba",
  storageBucket: "file-memo-543ba.appspot.com",
  messagingSenderId: "221256359725",
  appId: "1:221256359725:web:c6164f362f693c5b20fda4",
  measurementId: "G-D9ST125Y2Q",
};

firebase.initializeApp(fsConfig);

const firestore = new firebase.firestore();

module.exports = firestore;
