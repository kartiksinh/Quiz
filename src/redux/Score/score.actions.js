import { INCREMENT, DECREMENT, RESET, SETROUTE } from './score.types';

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

export const setRoute = (payload) => {
    console.log("action",payload);
    return {
       type: SETROUTE,
       payload,
    };
};