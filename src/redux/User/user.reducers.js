import { GETUSER, SETUSER } from './user.types';

const INITIAL_STATE = {
    user: {},
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GETUSER:
           return {
             ...state, count: state.count + 1,
           };
        case SETUSER:
           return {
              ...state, count: state.count - 1,
           };
         default: return state;
    }
};
export default reducer;