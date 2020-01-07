import * as firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDmJmHS-PvjbVmZWQPXnSBQ-t1rRZCH9Qo',
  authDomain: 'projectendcourse.firebaseapp.com',
  databaseURL: 'https://projectendcourse.firebaseio.com',
  projectId: 'projectendcourse',
  storageBucket: 'projectendcourse.appspot.com',
  messagingSenderId: '546331046390',
  appId: '1:546331046390:web:56fa9434d5559cb39217d7',
  measurementId: 'G-79YCLQJBK7'
};

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

var firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
