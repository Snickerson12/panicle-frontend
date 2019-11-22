import { POST_USER_GROUP } from "../actions/groupActions";

const initState = {}

const userGroupReducer = (state = initState, action) => {
    switch (action.type) {
    case POST_USER_GROUP:
        return action.user_group
    default:
        return state;
    }
}

export default userGroupReducer