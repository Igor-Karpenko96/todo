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
            setCards([
                {
                    label: input,
                    isDone: false,

                },
                ...cards]);
            setInput('');
        }
    }

    const onKeyEnter = (e) => {
        if (e.key === 'Enter') {
            setNewCard();
        }
    }

    const setDone = (index) => {
        setCards(
            cards.map((card, cardIndex) => index === cardIndex ? {...card, isDone: !card.isDone} : card)
        )
    }

    const removeCard = (index) => {
        const newCards = cards.filter((card, cardIndex) => {
            return cardIndex !== index;
        })
        setCards(newCards)
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

    const todoCardProps = {
        setDone,
        removeCard,
        todoCardWrapper: 'todoCardWrapper'
    }

    return (
        <div className='todoWrapper'>
            <Input {...inputProps}/>
            <Button {...buttonProps}/>
            <span className='cardsColumnWrapper'>
                <div className='cardsColumn'>
                    <span>In Progress</span>
                    {cards.map((card, index) => {
                        return (
                        !card.isDone && <TodoCard key={index} index={index} card={card} {...todoCardProps}/>
                    )})}
                </div>
                <div className='cardsColumn'>
                    <span>Done</span>
                    {cards.map((card, index) => {
                        return (
                        card.isDone && <TodoCard key={index} index={index} card={card} {...todoCardProps}/>
                    )})}
                </div>
            </span>
        </div>
    )
}

export default TodoWrapper;
