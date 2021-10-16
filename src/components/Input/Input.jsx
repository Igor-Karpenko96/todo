import React from 'react';
import './Input.css';

const Input = ({ setInputValue, input, onKeyEnter, inputWrapper }) => {

    return (
        <div className={inputWrapper}>
            <input placeholder='enter new task' className='input' type="text" onChange={setInputValue} onKeyDown={onKeyEnter} value={input}/>
        </div>
    )
}

export default Input;
