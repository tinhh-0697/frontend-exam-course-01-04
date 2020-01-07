import firebaseApp from '../Api/Configfirebase';

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

export function checkStatusLogin() {}
