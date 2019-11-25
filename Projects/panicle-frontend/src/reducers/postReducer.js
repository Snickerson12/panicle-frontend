import { CREATE_POST } from "../actions/postActions";
import { FETCH_POSTS } from "../actions/postActions";

const initState = []

const postReducer = (state = initState, action) => {
    switch (action.type) {
    case CREATE_POST:
        return [...state, action.post]
    case FETCH_POSTS:
        return action.post
    default:
        return state;
    }
}

export default postReducer