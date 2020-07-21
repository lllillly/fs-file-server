const firebase = require("firebase/app"); // 빈 객체
require("firebase/firestore");

//  fsConfig를 만들고 제이슨으로 만듬
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

firebase.initializeApp(fsConfig); // 초기화 시킴 ( 초기화는 아예 삭제한다는 것이 아님 )

const firestore = new firebase.firestore();

module.exports = firestore;
