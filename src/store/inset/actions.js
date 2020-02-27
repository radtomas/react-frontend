import actionTypes from "./constants";
import insetApi from "../../api/inset";

export function getInsets() {
  return async function (dispatch: Dispatch) {
    dispatch({
      type: actionTypes.START_INSETS_FETCHING
    });
    const response = await insetApi.getInsets();
    dispatch({
      type: actionTypes.SET_INSETS,
      payload: {insets: response.data, isFetching: false}
    })
  };
}

export function setInset(payload) {
  return {type: actionTypes.SET_INSET, payload}
}

export function addInset(payload) {
  return async function (dispatch: Dispatch) {
    dispatch({
      type: actionTypes.START_INSETS_FETCHING
    });
    const response = await insetApi.addInset(payload);
    console.log('add', response);
    if (response.success) {
      dispatch({
        type: actionTypes.ADD_INSET,
        payload: {
          inset: {
              ...payload,
              id: response.data.id
          },
          isFetching: false
        }
      })
    }
  };
}
