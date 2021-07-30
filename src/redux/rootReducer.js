import { combineReducers } from 'redux';

import userReducer from './User/user.reducers';
import scoreReducer from './Score/score.reducers';

const rootReducer = combineReducers({
    user: userReducer,
    score: scoreReducer,
});

export default rootReducer;