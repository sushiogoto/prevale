import { UPDATE_LOGIN_INPUT_TEXT } from '../constants/actions';

var initialState = {
};

function updateLoginText(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOGIN_INPUT_TEXT:
      let newVal = {};
      newVal[action.field] = action.text;
      return {
        ...state,
        ...newVal
      }
    default:
      return state;
  }
}

export default updateLoginText;
