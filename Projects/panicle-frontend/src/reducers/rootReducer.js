import usersReducer from './usersReducer';
import groupReducer from './groupReducer';
import userGroupReducer from './userGroupReducer';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import pendingUserReducer from './pendingUserReducer';
import { combineReducers} from 'redux';

const rootReducer = combineReducers({
    user: usersReducer,
    group: groupReducer,
    user_group: userGroupReducer,
    post: postReducer,
    comment: commentReducer,
    pending_user_group: pendingUserReducer
});

export default rootReducer