import React, { useState } from 'react';
import Button from './Button/Button';
import Input from './Input/Input';
import TodoCard from './TodoCard/TodoCard';

import './TodoWrapper.css';

const TodoWrapper = () => {
    const [input, setInput] = useState('');
    const [cards, setCards] = useState([]);

    const setInputValue = (e) => {
        setInput(e.target.value);
    };

    const setNewCard = () => {
        if (input !== '') {
            setCards([input, ...cards]);
            setInput('');
        }
    }

    const onKeyEnter = (e) => {
        if (e.key === 'Enter') {
            setNewCard();
        }
    }

    const inputProps = {
        setNewCard,
        setInputValue,
        onKeyEnter,
        input,
        inputWrapper: 'inputWrapper'
    };

    const buttonProps = {
        setNewCard,
        buttonWrapper: 'buttonWrapper'
    }

    return (
        <div className='todoWrapper'>
            <Input {...inputProps}/>
            <Button {...buttonProps}/>
            {cards.map((card, index) => (
                <TodoCard key={index} card={card}/>
            ))}
        </div>
    )
}

export default TodoWrapper;
