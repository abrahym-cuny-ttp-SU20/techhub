/**
 *  ACTION TYPE
 *  Purpose: Gets used by the reducer to run a payload
 */
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

/**
 * ACTION CREATORS
 * Purpose: Functions that send an action to the reducer.
 */
const login = (session) => {
    return {
        type: LOGIN,
        payload: session,
    };
};

const logout = (session) => {
    return {
        type: LOGOUT,
        payload: session,
    };
};

/**
 * REDUCER
 * Purpose: Take the action and matches with appropriate type and returns.
 * Extra Info: Used by the store in store/index.js
 */
const initialState = {
    isLoggedIn: false,
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload;
        case LOGOUT:
            return action.payload;
        default:
            return state;
    }
};