import { FETCH_USERS } from "../actions/userActions";

const initState = []

const usersReducer = (state = initState, action) => {
    switch (action.type) {
    case FETCH_USERS:
        return action.users
    default:
        return state;
    }
}

export default usersReducer