import React from 'react';

const Input = ({ setInputValue, setNewCard, input }) => {

    const onKeyEnter = (e) => {
        if (e.key === 'Enter') {
            setNewCard();
        }
    }
    return (
        <div>
            <input type="text" onChange={setInputValue} onKeyDown={onKeyEnter} value={input}/>
        </div>
    )
}

export default Input;
