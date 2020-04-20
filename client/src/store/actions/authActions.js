import { REGISTER_USER, LOGIN_USER } from './types';
import axios from 'axios';

export const registerUser = user => async (dispatch) => {
    console.log(user);
    
    const res = await axios.post("http://localhost:3100/auth/register", user);

    dispatch({ type: REGISTER_USER, payload: res.data });
};

export const loginUser = (user) => async (dispatch) => {
    const res = await axios.post("http://localhost:3100/auth/login", user);

    dispatch({ type: LOGIN_USER, payload: res.data})
};
