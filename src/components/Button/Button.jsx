import React from 'react';
import './Button.css';

const Button = ({ setNewCard, buttonWrapper }) => {
    return (
        <div className={`buttonWrapper ${buttonWrapper}`}>
            <span className='button' onClick={setNewCard}>add new task</span>
        </div>
    )
}

export default Button
