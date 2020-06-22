import axios from "axios";

let BASE_URL;
if(process.env.NODE_ENV === "development"){
  BASE_URL = "http://localhost:3000";
}
else {
  BASE_URL = process.env.REACT_APP_API_URL;
}
/**
 *  ACTION TYPE
 *  Purpose: Gets used by the reducer to run a payload
 */
const FETCH_USER = "FETCH_USER";

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

/**
 * THUNK CREATORS
 */
//For testing purposes
export const fetchUserThunk = (id) => (dispatch) => {
  return axios
    .get(`${BASE_URL}/api/users/${id}`)
    .then((res) => res.data)
    .then((user) => dispatch(fetchUser(user)))
    .catch((err) => console.log(err));
};

export const userSignupThunk = (newUser, ownProps) => (dispatch) => {
  return axios
    .post(`${BASE_URL}/api/users/signup`, newUser)
    .then((res) => res.data)
    .then(() => {
      ownProps.history.push("/");
    })
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
    default:
      return state;
  }
};

export default reducer;
