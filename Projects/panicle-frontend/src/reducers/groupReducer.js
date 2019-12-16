import { POST_GROUP, FETCH_GROUP, FETCH_SINGLE_GROUP } from "../actions/groupActions";

const initState = {
    group: [],
    single_group: {}
}

const groupReducer = (state = initState, action) => {
    switch (action.type) {
    case POST_GROUP:
        return {...state, group: [...state.group, action.group]}
    case FETCH_GROUP:
        return {...state, group: action.group}
    case FETCH_SINGLE_GROUP:
        return {...state, single_group: action.single_group}
    default:
        return state;
    }
}

export default groupReducer