import * as types from './type';

export function LoginFirebase(user) {
  return { type: types.LOGIN_FIREBASE, user };
}

export function checkStatusLogin() {
  return { type: types.CHECK_STATUS_LOGIN };
}

export function LogoutFirebase() {
  return { type: types.LOGOUT_FIREBASE };
}

export function SignupFirebase() {
  return { type: types.CREATE_USER };
}
