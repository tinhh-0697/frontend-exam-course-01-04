import * as types from './type';

const initialState = {
  articles: []
};

export const Articles = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_API_LOAD_RESPONSE:
      var list = Object.values(action.list);
      return {
        ...state,
        articles: list
      };
    default:
      return state;
  }
};
