import React, { useState } from 'react';
import Button from './Button/Button';
import Input from './Input/Input';
import TodoCard from './TodoCard/TodoCard';

const TodoWrapper = () => {
    const [input, setInput] = useState('');
    const [cards, setCards] = useState([]);

    const setInputValue = (e) => {
        setInput(e.target.value);
    };

    const setNewCard = () => {
        if (input !== '') {
            setCards([...cards, input]);
            setInput('');
        }
    }

    const inputProps = {
        setNewCard,
        setInputValue,
        input
    };

    const buttonProps = {
        setNewCard
    }

    return (
        <div>
            <Input {...inputProps}/>
            <Button {...buttonProps}/>
            {cards.map((card, index) => (
                <TodoCard key={index} card={card}/>
            ))}
        </div>
    )
}

export default TodoWrapper;
