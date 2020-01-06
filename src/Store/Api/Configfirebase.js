import * as firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBtiSbsTKhzOfAPexM8BOqilj5yxEaIDm0',
  authDomain: 'machinecompany-8426a.firebaseapp.com',
  databaseURL: 'https://machinecompany-8426a.firebaseio.com',
  projectId: 'machinecompany-8426a',
  storageBucket: 'machinecompany-8426a.appspot.com',
  messagingSenderId: '1037066428515',
  appId: '1:1037066428515:web:58eabf4b2d7ec5ae729856',
  measurementId: 'G-S1TE8TRBX4'
};
// Initialize Firebase
// firebase.analytics();

var firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
export var firestore = firebase.firestore(firebaseApp);
