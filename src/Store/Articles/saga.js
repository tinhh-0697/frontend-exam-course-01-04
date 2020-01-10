import * as types from './type';
import { getDataResponse } from './action';
import * as ServiceAPI from '../Api/ServiceAPI';
import { takeLatest, put, call } from 'redux-saga/effects';

export function* Articles() {
  yield takeLatest(types.DATA_API_LOAD, loadDataArticles);
}

function* loadDataArticles() {
  const list = yield call(ServiceAPI.loadData);
  yield put(getDataResponse(list));
}
