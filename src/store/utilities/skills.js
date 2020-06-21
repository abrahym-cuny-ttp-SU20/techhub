import axios from "axios";

/**
 *  ACTION TYPE
 *  Purpose: Gets used by the reducer to run a payload
 */
const FETCH_USER_SKILLS = "FETCH_USER_SKILLS";
const ADD_USER_SKILL = "ADD_USER_SKILL";
const REMOVE_USER_SKILL = "REMOVE_USER_SKILL";

/**
 * ACTION CREATORS
 * Purpose: Functions that send an action to the reducer.
 */
const fetchUserSkills = (skills) => {
  return {
    type: ADD_USER_SKILL,
    payload: skills,
  };
};

const addUserSkill = (skill) => {
  return {
    type: ADD_USER_SKILL,
    payload: skill,
  };
};

const removeUserSkill = (id) => {
  return {
    type: REMOVE_USER_SKILL,
    payload: id,
  };
};

/**
 * THUNK CREATORS
 */
export const fetchUserSkillsThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/skills/users/${id}`)
    .then((res) => res.data)
    .then((skills) => dispatch(fetchUserSkills(skills)))
    .catch((err) => console.log(err));
};

export const addUserSkillThunk = (skill, userId) => (dispatch) => {
  return axios
    .post(`/api/skills/users/${userId}`, skill)
    .then((res) => res.data)
    .then((newSkill) => dispatch(addUserSkill(newSkill)))
    .catch((err) => console.log(err));
};

export const removeUserSkillThunk = (id, userId) => (dispatch) => {
  return axios
    .delete(`/api/skills/${id}/users/${userId}`)
    .then(dispatch(removeUserSkill(id)))
    .catch((err) => console.log(err));
};

/**
 * REDUCER
 * Purpose: Take the action and matches with appropriate type and returns.
 * Extra Info: Used by the store in store/index.js
 */
const reducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_USER_SKILLS:
            return action.payload;
        case ADD_USER_SKILL:
            return [...state,action.payload];
        case REMOVE_USER_SKILL:
            return state.filter((skill) => skill.id !== action.payload);
        default:
            return state;
    }
}

export default reducer;