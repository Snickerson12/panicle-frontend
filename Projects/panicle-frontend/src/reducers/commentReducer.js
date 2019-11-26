import { CREATE_COMMENT, FETCH_COMMENTS } from "../actions/commentActions";

const initState = []

const commentReducer = (state = initState, action) => {
    switch (action.type) {
    case CREATE_COMMENT:
        return [...state, action.comment]
    case FETCH_COMMENTS:
        return action.comment
    default:
        return state;
    }
}

export default commentReducer