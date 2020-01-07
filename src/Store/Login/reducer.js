import * as types from './type';
import firebaseApp from '../Api/Configfirebase';
const initialState = {};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_FIREBASE:
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(action.user.email, action.user.password)
        .then(function(resust) {
          const user = {
            UserName: resust.user.displayName,
            idToken: resust.user.refreshToken,
            email: resust.user.email
          };
          localStorage.setItem('user', JSON.stringify(user));
        })
        .catch(function(error) {
          console.log('erro');
        });
      return { ...state };
    case types.CHECK_STATUS_LOGIN:
      var user = localStorage.getItem('user');
      if (user) {
        state = {
          ...state,
          stateLogin: true
        };
      } else {
        state = {
          ...state,
          stateLogin: false
        };
      }
      return { ...state };
    case types.LOGOUT_FIREBASE:
      firebaseApp
        .auth()
        .signOut()
        .then(() => {
          localStorage.removeItem('user');
        })
        .catch(error => {
          console.log('errologout');
        });
      return { ...state };
    default:
      return state;
  }
};
