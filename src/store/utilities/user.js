import axios from "axios";

/**
 *  ACTION TYPE
 *  Purpose: Gets used by the reducer to run a payload
 */
const FETCH_USER = "FETCH_USER";
const USER_LOGIN = "USER_LOGIN";
const USER_SIGNUP = "USER_SIGNUP";

/**
 * ACTION CREATORS
 * Purpose: Functions that send an action to the reducer.
 */
const fetchUser = (user) => {
  return {
    type: FETCH_USER,
    payload: user,
  };
};

const userLogin = (user) => {
  return {
    type: USER_LOGIN,
    payload: user,
  };
};

const userSignup = (user) => {
  return {
    type: USER_SIGNUP,
    payload: user,
  };
};

/**
 * THUNK CREATORS
 * Purpose: Functions that require external resources are done here.
 * Called in StudentsContainer and passed into dispatch
 */
export const fetchUserThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/users/${id}`)
    .then((res) => res.data)
    .then((user) => dispatch(fetchUser(user)))
    .catch((err) => console.log(err));
};

export const userLoginThunk = (loginCred) => (dispatch) => {
  return axios
    .post(`/api/users/login`, loginCred)
    .then((res) => res.data)
    .then((user) => dispatch(userLogin(user)))
    .catch((err) => console.log(err));
};

export const userSignupThunk = (newUser,ownProps) => (dispatch) => {
  return axios
    .post(`/api/users/signup`, newUser)
    .then((res) => res.data)
    .then((user) => dispatch(userSignup(user)))
    .catch((err) => console.log(err));
};
/**
 * REDUCER
 * Purpose: Take the action and matches with appropriate type and returns.
 * Extra Info: Used by the store in store/index.js
 */
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case USER_LOGIN:
      return action.payload;
    case USER_SIGNUP:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
