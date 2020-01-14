import * as types from './type';

export function loadDataAPI() {
  return { type: types.DATA_API_LOAD };
}

export function getDataResponse(list) {
  return { type: types.DATA_API_LOAD_RESPONSE, list };
}

export function addData(object) {
  return { type: types.DATA_API_ADD, object };
}

export function editData(object) {
  return { type: types.DATA_API_EDIT, object };
}

export function deleteData(id) {
  return { type: types.DATA_API_DELETE, id };
}

export function editStatusCheckData(object) {
  return { type: types.DATA_API_EDIT_CHECK, object };
}
