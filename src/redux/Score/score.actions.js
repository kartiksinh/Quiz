import { INCREMENT, DECREMENT, RESET } from './score.types';

export const increment = () => {
    return {
        type: INCREMENT,
    };
};

export const decrement = () => {
    return {
       type: DECREMENT,
    };
};

export const reset = () => {
    return {
       type: RESET,
    };
};