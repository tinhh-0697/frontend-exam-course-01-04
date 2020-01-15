import * as types from './type';

const initialState = {
  flag: false,
  articles: []
};

export const Articles = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_API_LOAD_RESPONSE:
      var list = Object.values(action.list);
      return {
        ...state,
        flag: true,
        articles: list
      };
    default:
      return state;
  }
};
