import { POST_GROUP } from "../actions/groupActions";
import { FETCH_GROUP } from "../actions/groupActions";

const initState = []

const groupReducer = (state = initState, action) => {
    switch (action.type) {
    case POST_GROUP:
        return [...state, action.group]
    case FETCH_GROUP:
        return action.group
    default:
        return state;
    }
}

export default groupReducer