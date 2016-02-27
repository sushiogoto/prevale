import { UPDATE_LOCATION } from '../constants/actions';

import api from '../utils/api';

export function updateLocation(data) {
  return {
    type: UPDATE_LOCATION,
    data: data
  }
};
