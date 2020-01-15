import * as type from './type';
import {
  thyme_light,
  thyme_dark
} from '../../components/Modules/ValiableStyle';
const initialState = {
  bool_background: JSON.parse(localStorage.getItem('thyme')),
  // bool_background: function() {
  //   if (localStorage.getItem('thyme')) {
  //     if (localStorage.getItem('thyme') === 'false') {
  //       return false;
  //     }
  //   }
  //   return true;
  // },
  thymes: function() {
    if (localStorage.getItem('thyme')) {
      if (localStorage.getItem('thyme') === 'false') {
        return thyme_dark;
      }
    }
    return thyme_light;
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
          thymes: thyme_light
        };
        localStorage.setItem('thyme', state.bool_background);
      } else {
        state = {
          ...state,
          thymes: thyme_dark
        };
        localStorage.setItem('thyme', state.bool_background);
      }
      return { ...state };
    default:
      return state;
  }
};
