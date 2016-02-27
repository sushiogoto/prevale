import { UPDATE_LOGIN_INPUT_TEXT } from '../constants/actions';

import api from '../utils/api';

export function updateLoginInputText(field, text) {
  return {
    type: UPDATE_LOGIN_INPUT_TEXT,
    field,
    text
  };
};
