import {INCREMENT, DECREMENT, SET_DEFAULT} from './counter.types'

export const increaseCounter = () => {
    return {
        type: INCREMENT,
    };
};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};

export const setDefaultCounter = (_num) => {
    return {
        type: SET_DEFAULT,
        _num: _num
    };
};