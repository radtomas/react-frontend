import actionTypes from "./constants";

const initialState = {
    insets: [],
    inset: null,
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
            console.log('reducer', action.payload)
            return {
                ...state,
                ...action.payload
            };
        case actionTypes.ADD_INSET:
            console.log('REDUCER ADD');
            return {
                ...state
            };
        default:
            return state;
    }
}

export default inset;