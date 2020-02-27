import actionTypes from "./constants";

const initialState = {
  insets: [],
  inset: {},
  isFetching: false
};

function inset(state = initialState, action) {
  switch (action.type) {
    case action.START_INSETS_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.SET_INSETS:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.SET_INSET:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.ADD_INSET:
      console.log('REDUCER ADD', action.payload);
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export default inset;