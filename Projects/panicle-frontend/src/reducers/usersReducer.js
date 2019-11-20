import { POST_USER } from "../actions/userActions";

const initState = {}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
    case POST_USER:
        return action.user
    default:
        return state;
    }
}

export default usersReducer