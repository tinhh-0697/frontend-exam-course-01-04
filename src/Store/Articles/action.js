import * as types from './type';

export function loadDataAPI() {
  return { type: types.DATA_API_LOAD };
}

export function getDataResponse(list) {
  return { type: types.DATA_API_LOAD_RESPONSE, list };
}
