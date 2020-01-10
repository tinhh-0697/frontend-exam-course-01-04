import { fork } from 'redux-saga/effects';
import { Articles } from '../Store/Articles/saga';

export function* rootSaga() {
  yield fork(Articles);
}
