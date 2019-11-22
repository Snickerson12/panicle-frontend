import { POST_GROUP } from "../actions/groupActions";

const initState = {}

const groupReducer = (state = initState, action) => {
    switch (action.type) {
    case POST_GROUP:
        return action.group
    default:
        return state;
    }
}

export default groupReducer