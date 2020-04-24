import * as actionTypes from "../../actions/authActions/authTypes";
import { updateObject } from "../../../shared/utility";

const initialState = {
  token: localStorage.getItem("token") || null,
  authUser: JSON.parse(localStorage.getItem("authUser")) || null,
  isAuth: false,
  error: null,
  loading: false,
  loginRedirectPath: "/dashboard",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return updateObject(state, {
              loading: true,
              error: null
            })
        case actionTypes.LOGIN_SUCCESS:
          return updateObject(state, {
            loading: false,
            isAuth: true,
            authUser: action.authUser,
            error: null
          })
        case actionTypes.LOGIN_FAIL:
          return updateObject(state, {
            loading: false,
            error: action.error
          })
        case actionTypes.LOGOUT:
              return updateObject(state, {
                token: null,
                authData: null,
                isAuth: false,
              })
        case actionTypes.SET_LOGIN_REDIRECT:
          return updateObject(state, {
             loginRedirectPath: action.path 
            })
        default: return state
    };
};

export default reducer;