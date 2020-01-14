import * as types from './type';
import { getDataResponse, loadDataAPI } from './action';
import * as ServiceAPI from '../Api/ServiceAPI';
import { takeLatest, put, call } from 'redux-saga/effects';

export function* Articles() {
  yield takeLatest(types.DATA_API_LOAD, loadDataArticles);
  yield takeLatest(types.DATA_API_ADD, addDataArticles);
  yield takeLatest(types.DATA_API_EDIT, editDataArticles);
  yield takeLatest(types.DATA_API_EDIT_CHECK, editCheckArticles);
  yield takeLatest(types.DATA_API_DELETE, deleteDataArticles);
}

function* loadDataArticles() {
  const list = yield call(ServiceAPI.loadData);
  yield put(getDataResponse(list));
}

function* addDataArticles(action) {
  yield call(ServiceAPI.addDataAPI, action.object);
  yield put(loadDataAPI());
}

function* editDataArticles(action) {
  yield call(ServiceAPI.editDataAPI, action.object);
  yield put(loadDataAPI());
}

function* deleteDataArticles(action) {
  yield call(ServiceAPI.deleteDataAPI, action.id);
  yield put(loadDataAPI());
}

function* editCheckArticles(action) {
  yield call(ServiceAPI.editCheckDataAPI, action.object);
  yield put(loadDataAPI());
}
