import { CREATE_POST, FETCH_POSTS, DELETE_POST } from "../actions/postActions";

const initState = []

const postReducer = (state = initState, action) => {
    switch (action.type) {
    case CREATE_POST:
        return [...state, action.post]
    case FETCH_POSTS:
        return action.post
    case DELETE_POST:
        const postId = action.post;
        const newState = state.filter(post => post.id !== postId);
        return [...state, newState]
    default:
        return state;
    }
}

export default postReducer

