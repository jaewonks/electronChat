import firebase from 'firebase/app'
import 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const config = {
  apiKey: "AIzaSyD4LvBs0klQpJqc8C_m5IBbpe51AV0FUWo",
  authDomain: "electron-chat-3e60c.firebaseapp.com",
  databaseURL: "https://electron-chat-3e60c.firebaseio.com",
  projectId: "electron-chat-3e60c",
  storageBucket: "electron-chat-3e60c.appspot.com",
  messagingSenderId: "170764012402",
  appId: "1:170764012402:web:ddb123b38b47ba65efebeb",
  measurementId: "G-7T64VE6GKH"
};

export const { Timestamp } = firebase.firestore;
// Initialize Firebase
export default firebase.initializeApp(config).firestore();
