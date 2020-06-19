import axios from "axios";
import { sessionService } from "redux-react-session";


/**
 * THUNK CREATORS
 * Purpose: Functions that require external resources are done here.
 * Called in StudentsContainer and passed into dispatch
 */
export const loginThunk = (user, ownProps) => {
    return () => {
        return axios.post(`/api/users/login`,user).then(res => {
            const { id } = res.data.id;
            sessionService.saveSession({ id })
                .then(() => {
                    sessionService.saveUser(res.data)
                        .then(() => {
                            ownProps.history.push('/');
                        }).catch(err => console.error(err));
                }).catch(err => console.error(err));
        });
    };
};

export const logoutThunk = (ownProps) => {
    return () => {
        return axios.post(`/api/users/logout`).then(() => {
            sessionService.deleteSession();
            sessionService.deleteUser();
            ownProps.history.push('/');
        }).catch(err => {
            throw (err);
        });
    };
};


