import { UPDATE_LOCATION } from '../constants/actions';

var initialState = {
  currentJourney: {}
};

// TODO: Fix this to better account for tracking lat/lon
function updateJourney(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOCATION:
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

export default updateJourney;
