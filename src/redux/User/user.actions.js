import { GETUSER, SETUSER } from './user.types';

export const getUser = () => {
    return {
        type: GETUSER,
    };
};

export const setUser = () => {
    return {
       type: SETUSER,
    };
};