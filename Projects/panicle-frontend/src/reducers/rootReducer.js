import usersReducer from './usersReducer';
import groupReducer from './groupReducer';
import { combineReducers} from 'redux';

const rootReducer = combineReducers({
    user: usersReducer,
    group: groupReducer
});

export default rootReducer