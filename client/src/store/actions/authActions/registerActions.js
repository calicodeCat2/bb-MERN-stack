import * as actionTypes from './authTypes';
import axios from 'axios';
import { url } from '../../../shared/apiUrl';


export const registerUser = (user, redirect) => {
    return async dispatch => {
        dispatch({ type: actionTypes.REGISTER_START })
        try {
            const res = await axios.post(`${url}/auth/register`, user);
            dispatch({
                type: actionTypes.REGISTER_SUCCESS,
                data: { newUser: res.data.user}
            })
        } catch(error) {
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                data: {error}
            })
        }
    }
};
