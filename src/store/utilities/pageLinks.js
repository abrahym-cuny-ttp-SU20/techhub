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
const FETCH_USER_PAGE_LINKS = "FETCH_USER_LINK";
const EDIT_PAGE_LINK = "EDIT_PAGE_LINK";
const ADD_PAGE_LINK = "ADD_PAGE_LINK";
const DELETE_PAGE_LINK = "DELETE_PAGE_LINK";

/**
 * ACTION CREATORS
 * Purpose: Functions that send an action to the reducer.
 */
const fetchUserPageLinks = (pageLinks) => {
  return {
    type: FETCH_USER_PAGE_LINKS,
    payload: pageLinks,
  };
};

const editPageLink = (pageLink) => {
  return {
    type: EDIT_PAGE_LINK,
    payload: pageLink,
  };
};

const addPageLink = (pageLink) => {
  return {
    type: ADD_PAGE_LINK,
    payload: pageLink,
  };
};

const deletePageLink = (id) => {
  return {
    type: DELETE_PAGE_LINK,
    payload: id,
  };
};

/**
 * THUNK CREATORS
 */
export const fetchUserPageLinksThunk = (id) => (dispatch) => {
  return axios
    .get(`${BASE_URL}/api/pageLinks/users/${id}`)
    .then((res) => res.data)
    .then((links) => dispatch(fetchUserPageLinks(links)))
    .catch((err) => console.log(err));
};

export const editPageLinkThunk = (pageLink) => (dispatch) => {
  return axios
    .put(`${BASE_URL}/api/pageLinks/${pageLink.id}`,pageLink)
    .then((res) => res.data)
    .then((pageLink) => dispatch(editPageLink(pageLink)))
    .catch((err) => console.log(err));
};

export const addPageLinkThunk = (pageLink) => (dispatch) => {
  return axios
    .post(`${BASE_URL}/api/pageLinks`, pageLink, { crossdomain: true })
    .then((res) => res.data)
    .then((pageLink) => dispatch(addPageLink(pageLink)))
    .catch((err) => console.log(err));
};

export const deletePageLinkThunk = (id) => (dispatch) => {
  return axios
    .delete(`${BASE_URL}/api/pageLinks/${id}`, { crossdomain: true })
    .then(dispatch(deletePageLink(id)))
    .catch((err) => console.log(err));
};

/**
 * REDUCER
 * Purpose: Take the action and matches with appropriate type and returns.
 * Extra Info: Used by the store in store/index.js
 */
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_PAGE_LINKS:
      return action.payload;
    case EDIT_PAGE_LINK:
      return [...state, action.payload];
    case ADD_PAGE_LINK:
      return [...state, action.payload];
    case DELETE_PAGE_LINK:
      return state.filter((pageLink) => pageLink.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
