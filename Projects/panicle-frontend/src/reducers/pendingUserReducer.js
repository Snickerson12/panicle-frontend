import { POST_PENDING_USER, FETCH_PENDING_USER, DELETE_PENDING_USER } from '../actions/pendingUserActions';

const initState = []

const pendingUserReducer = (state = initState, action) => {
    switch (action.type) {
    case POST_PENDING_USER:
        return [...state, action.pending_user_group]
    case FETCH_PENDING_USER:
        return action.pending_user_group
    case DELETE_PENDING_USER:
        const pendingId = parseInt(action.pending_user_group);
        const newState = state.filter(pending => pending.id !== pendingId);
        return newState
    default:
        return state;
    }
}

export default pendingUserReducer