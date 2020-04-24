import * as actionTypes from "../../actions/authActions/authTypes";
import { updateObject } from '../../../shared/utility';

const initialState = {
    newUser: null,
    error: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_START:
            return updateObject(state, {
                loading: true,
                error: null
            })
        case actionTypes.REGISTER_SUCCESS:
            return updateObject(state, {
                loading: false,
                newUser: action.newUser,
                error: null
            })
        case actionTypes.REGISTER_FAIL:
            return updateObject(state, {
                loading: false,
                error: action.error,
            })
        default: return state
        }
    }

    export default reducer;