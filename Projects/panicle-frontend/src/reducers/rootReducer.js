import usersReducer from './usersReducer';
import groupReducer from './groupReducer';
import userGroupReducer from './userGroupReducer';
import postReducer from './postReducer';
import { combineReducers} from 'redux';

const rootReducer = combineReducers({
    user: usersReducer,
    group: groupReducer,
    user_group: userGroupReducer,
    post: postReducer
});

export default rootReducer