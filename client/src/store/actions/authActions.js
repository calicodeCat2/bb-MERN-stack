import { REGISTER_USER, LOGIN_USER } from './types';
import axios from 'axios';

export const registerUser = () => async (dispatch) => {
    const res = await axios.post("http://localhost:3100/auth/register");

    dispatch({ type: REGISTER_USER, payload: res.data });
};

export const loginUser = () => async (dispatch) => {
    const res = await axios.post("http://localhost:3100/auth/login");

    dispatch({ type: LOGIN_USER, payload: res.data})
};
