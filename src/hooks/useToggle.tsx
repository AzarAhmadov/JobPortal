'use client'

import { useState, useCallback } from 'react';

const useToggle = (initialState: boolean) => {
    const [state, setState] = useState(initialState);

    const toggle = useCallback(() => {
        setState(prevState => !prevState);
    }, []);

    return [state, toggle] as const;
};

export default useToggle;
