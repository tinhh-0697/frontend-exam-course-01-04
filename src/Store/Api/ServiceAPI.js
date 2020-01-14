import firebaseApp from '../Api/Configfirebase';
import * as firebase from 'firebase';

export function checkLogin(user) {
  firebaseApp
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(function(resust) {
      console.log(resust.user);
      const user = {
        UserName: resust.user.displayName,
        idToken: resust.user.refreshToken,
        email: resust.user.email
      };
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user));
      console.log('success');
    })
    .catch(function(error) {
      console.log('erro');
    });
}

export function loadData() {
  return firebase
    .database()
    .ref('Articles')
    .once('value')
    .then(function(dataSnapshot) {
      return dataSnapshot.val();
    });
}

export function addDataAPI(object) {
  var newPostKey = firebase
    .database()
    .ref()
    .child('Articles')
    .push().key;

  const article = {
    ...object,
    id: newPostKey
  };

  var updates = {};
  updates['/Articles/' + newPostKey] = article;
  firebase
    .database()
    .ref()
    .update(updates);
}

export function editDataAPI(object) {
  var updates = {};
  updates['/Articles/' + object.id] = object;
  firebase
    .database()
    .ref()
    .update(updates);
}

export function deleteDataAPI(id) {
  firebase
    .database()
    .ref()
    .child('/Articles/' + id)
    .remove();
}

export function editCheckDataAPI(object) {
  var article = {
    id: object.id,
    name: object.name,
    views: object.views,
    status: !object.status
  };
  var updates = {};
  updates['/Articles/' + object.id] = article;
  firebase
    .database()
    .ref()
    .update(updates);
}
