import { INCREMENT, DECREMENT, RESET } from './score.types';

const INITIAL_STATE = {
    score: 0,
    route: '',
};

const scoreReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, score: state.score + 1,
            };
        case DECREMENT:
            return {
                ...state, score: state.score - 1,
            };
        case RESET:
            return {
                ...state, score: 0,
            };
            case RESET:
            return {
                ...state, route: action.payload,
            };
        default: return state;
    }
};
export default scoreReducer;