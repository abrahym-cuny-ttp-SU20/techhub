import axios from "axios";
import { sessionService } from "redux-react-session";

let BASE_URL;
if(process.env.NODE_ENV === "development"){
  BASE_URL = "http://localhost:3000";
}
else {
  BASE_URL = process.env.REACT_APP_API_URL;
}

/**
 * THUNK CREATORS
 */
export const loginThunk = (user, ownProps) => () => {
  return axios.post(`${BASE_URL}/api/users/login`, user, { crossdomain: true }).then((res) => {
    const { id } = res.data.id;
    sessionService
      .saveSession({ id })
      .then(() => {
        sessionService
          .saveUser(res.data)
          .then(ownProps.history.push("/"))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  });
};

export const logoutThunk = (history) => {
  return () => {
    return axios
      .post(`${BASE_URL}/api/users/logout`, { crossdomain: true })
      .then(() => {
        sessionService
          .deleteSession()
          .then(() => sessionService.deleteUser())
          .then(() => history.push("/"))
          .catch((err) => console.error(err));
      })
      .catch((err) => {
        throw err;
      });
  };
};

export const updateUserSessionThunk = (user) => () => {
  return axios
    .put(`${BASE_URL}/api/users`, user, { crossdomain: true })
    .then((res) => {
      sessionService.saveUser(res.data);
    })
    .catch((err) => console.error(err));
};
