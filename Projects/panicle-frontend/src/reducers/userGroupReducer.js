import { POST_USER_GROUP } from '../actions/userGroupActions';
import { FETCH_USER_GROUPS } from '../actions/userGroupActions'

const initState = []

const userGroupReducer = (state = initState, action) => {
    switch (action.type) {
    case POST_USER_GROUP:
        return [...state, action.user_group]
    case FETCH_USER_GROUPS:
        return action.user_group
    default:
        return state;
    }
}

export default userGroupReducer