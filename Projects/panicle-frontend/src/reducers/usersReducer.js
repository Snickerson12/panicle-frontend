import { POST_USER } from "../actions/userActions";
import { LOGOUT_USER } from '../actions/userActions';

const initState = {}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
    case POST_USER:
        return action.user
    case LOGOUT_USER:
        return state = {}
    default:
        return state;
    }
}

export default usersReducer