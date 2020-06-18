import axios from "axios";

/**
 *  ACTION TYPE
 *  Purpose: Gets used by the reducer to run a payload
 */
const FETCH_USER = "FETCH_USER";
const USER_LOGIN = "USER_LOGIN";
const USER_SIGNUP = "USER_SIGNUP";
const USER_LOGOUT = "USER_LOGOUT";

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

const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

/**
 * THUNK CREATORS
 * Purpose: Functions that require external resources are done here.
 * Called in StudentsContainer and passed into dispatch
 */
//For testing purposes
export const fetchUserThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/users/${id}`)
    .then((res) => res.data)
    .then((user) => dispatch(fetchUser(user)))
    .catch((err) => console.log(err));
};

//Still working on
export const userLoginThunk = (loginCred, ownProps) => (dispatch) => {
  return axios
    .post(`/api/users/login`, loginCred)
    .then((res) => res.data)
    .then((user) => {
      ownProps.history.push(`/`);
      return dispatch(userLogin(user));
    })
    .catch((err) => console.log(err));
};

//Still working on
export const userSignupThunk = (newUser, ownProps) => (dispatch) => {
  return axios
    .post(`/api/users/signup`, newUser)
    .then((res) => res.data)
    .then((user) => {
      ownProps.history.push("/");
      return dispatch(userSignup(user));
    })
    .catch((err) => console.log(err));
};

export const userLogoutThunk = (user) => (dispatch) => {
  return axios
    .post(`/api/users/logout`, user)
    .then(() => dispatch(userLogout()));
};

/**
 * REDUCER
 * Purpose: Take the action and matches with appropriate type and returns.
 * Extra Info: Used by the store in store/index.js
 */
const initialState = {
  isAuthUser: !!localStorage.getItem("user"),
  user: JSON.parse(localStorage.getItem("user")) || {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case USER_LOGIN:
      localStorage.setItem("user", action.payload);
      return { ...state, isAuthUser: true, user: action.payload.user };
    case USER_SIGNUP:
      return state;
    case USER_LOGOUT:
      localStorage.removeItem("user");
      return { ...state, isAuthUser: false, user: {} };
    default:
      return state;
  }
};

export default reducer;
