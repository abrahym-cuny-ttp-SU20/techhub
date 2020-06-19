import axios from "axios";
import { sessionService } from "redux-react-session";

/**
 * THUNK CREATORS
 */
export const loginThunk = (user, ownProps) => () => {
  return axios.post(`/api/users/login`, user).then((res) => {
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
      .post(`/api/users/logout`)
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
    .put(`/api/users`, user)
    .then((res) => {
      sessionService.saveUser(res.data);
    })
    .catch((err) => console.error(err));
};
