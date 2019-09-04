import { useState } from 'react';

export const useADAInput = (initialState, updater) => {
    const [state, setState] = useState(initialState);
    const updateState = e => {
        if (!e) {
            setState(updater(state));
            return;
        }
        const { keyCode } = e;
        if (!keyCode || keyCode === 13 || keyCode === 32) {
            setState(updater(state, e));
        }
    };
    return [state, updateState];
};
