// database/firebaseDb.js
//import firebase from 'firebase/app';

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAm8xQpxlorgkwYi10M9KcQdG0pq5jvEuA",
  authDomain: "playgangfirebase.firebaseapp.com",
  databaseURL: "https://playgangfirebase-default-rtdb.firebaseio.com",
  projectId: "playgangfirebase",
  storageBucket: "playgangfirebase.appspot.com",
  messagingSenderId: "886284371051",
  appId: "1:886284371051:web:7081a4c539215ea62e5d2e",
  measurementId: "G-3J7ZGS80DK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;


