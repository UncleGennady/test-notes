import React from 'react';
import './styles.scss'

const Button = ({children, handle, disabled}) => {
    return (
        <button onClick={handle} disabled={disabled} className={'button'}>
            {children}
        </button>
    );
};

export default Button;