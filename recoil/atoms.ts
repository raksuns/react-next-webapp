import {atom, selector} from 'recoil';

export const countState = atom<number>({
    key: 'count',
    default: 0,
});

export const incrementCount = selector({
    key: 'incrementCount',
    set: ({set}) => {
        set(countState, (currCount) => currCount + 1);
    },
    get: ({get}) => {
        get(countState)
    }
});

export const decrementCount = selector({
    key: 'decrementCount',
    set: ({set}) => {
        set(countState, (currCount) => currCount - 1);
    },
    get: ({get}) => {
        get(countState);
    }
});