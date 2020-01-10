import * as type from './type';
import {
  thyme_light,
  thyme_dark
} from '../../components/Modules/ValiableStyle';
const initialState = {
  bool_background: true,
  thymes: thyme_light
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
      } else {
        state = {
          ...state,
          thymes: thyme_dark
        };
      }
      return { ...state };
    default:
      return state;
  }
};
