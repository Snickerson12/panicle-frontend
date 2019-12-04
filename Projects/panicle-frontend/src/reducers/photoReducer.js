import { POST_PHOTO, FETCH_PHOTOS  } from "../actions/photoActions"

const initState = []

const photoReducer = (state = initState, action) => {
    switch (action.type) {
    case POST_PHOTO:
        return action.photo
    case FETCH_PHOTOS:
        return action.photo
    default:
        return state;
    }
}

export default photoReducer