import * as type from './type';
const initialState = {
  bool_background: true,

  thymes: {
    background_search: '#fafbfc',
    background_main: '#eceef0',
    background_table_1: '#ffffff',
    background_table_2: '#f7f8f9',
    border_table: '#eaeced',
    text_color_1: '#606060',
    color_title_articles: '#212529'
  }
};

export const SetThyme = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_STATE_THYME:
      state = {
        ...state,
        bool_background: !state.bool_background
      };
      if (state.bool_background === true) {
        state = {
          ...state,
          thymes: {
            background_search: '#fafbfc',
            background_main: '#eceef0',
            background_table_1: '#ffffff',
            background_table_2: '#f7f8f9',
            border_table: '#eaeced',
            text_color_1: '#606060',
            text_color_2: '#676767',
            color_title_articles: '#212529'
          }
        };
      } else {
        state = {
          ...state,
          thymes: {
            background_search: '#232528',
            background_main: '#1f2124',
            background_table_1: '#222427',
            background_table_2: '#242629',
            border_table: '#36383b',
            text_color_1: '#aaaaaa',
            text_color_2: '#5e5e5e',
            color_title_articles: '#ffffff'
          }
        };
      }
      return { ...state };
    default:
      return state;
  }
};
