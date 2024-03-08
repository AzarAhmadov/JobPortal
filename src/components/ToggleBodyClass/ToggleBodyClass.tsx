
import React, { useEffect } from 'react';
import { ToogleProps } from '../MobileMenu/MobileMenu';

const ToggleBodyClass: React.FC<ToogleProps> = ({ isToggled }) => {

    useEffect(() => {
        document.querySelector('body')?.classList.toggle('active', isToggled);
    }, [isToggled]);

    return null;
}

export default ToggleBodyClass;
