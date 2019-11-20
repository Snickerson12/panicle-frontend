import usersReducer from './usersReducer';
import { combineReducers} from 'redux';

const rootReducer = combineReducers({
    user: usersReducer,
});

export default rootReducer