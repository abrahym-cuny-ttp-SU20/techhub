import axios from "axios";

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
const fetchUserLinks = (links) => {
  return {
    type: FETCH_USER_PAGE_LINKS,
    payload: links,
  };
};

const editPageLink = (link) => {
  return {
    type: EDIT_PAGE_LINK,
    payload: link,
  };
};

const addPageLink = (link) => {
  return {
    type: ADD_PAGE_LINK,
    payload: link,
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
export const fetchUserLinksThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/links/users/${id}`)
    .then((res) => res.data)
    .then((links) => dispatch(fetchUserLinks(links)))
    .catch((err) => console.log(err));
};

export const editPageLinkThunk = (link) => (dispatch) => {
  return axios
    .put(`/api/links/${link.id}`)
    .then((res) => res.data)
    .then((link) => dispatch(editPageLink(link)))
    .catch((err) => console.log(err));
};

export const addPageLinkThunk = (link) => (dispatch) => {
  return axios
    .post(`/api/links`, link)
    .then((res) => res.data)
    .then((link) => dispatch(addPageLink(link)))
    .catch((err) => console.log(err));
};

export const deletePageLinkThunk = (id) => (dispatch) => {
  return axios
    .delete(`/api/links/${id}`)
    .then(() => dispatch(deletePageLink(id)))
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
      return state.filter((link)=> link.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
