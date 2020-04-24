import * as actionTypes from "./authTypes";
import axios from "axios";
import { url } from '../../../shared/apiUrl';

export const loginUser = (user) => {
  return async dispatch => {
    dispatch({ type: actionTypes.REGISTER_START })
    try {
      const res = await axios.post(`${url}/auth/login`, user);
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        data: { token: res.data.token, authUser: res.data.authUser}
      })
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("authUser", JSON.stringify(res.data.user));
      } catch (error) {
        dispatch({
          type: actionTypes.LOGIN_FAIL,
          data: { error }
        })
      }
  };
};

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  localStorage.removeItem("authUser");
  return dispatch ({
    type: actionTypes.LOGOUT
  });
}

export const setLoginRedirect = (path) => {
  return {
    type: actionTypes.SET_LOGIN_REDIRECT,
    path,
  };
};
