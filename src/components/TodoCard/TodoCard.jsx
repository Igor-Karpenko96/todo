import React from 'react';

import '../TodoCard/TodoCard.css';

const TodoCard = ({ card: { label, isDone }, index, removeCard, todoCardWrapper, setDone }) => {
    return (
        <div className={`card ${todoCardWrapper}`}>
            <span className={isDone ? 'cardDone' : ''}>{label}</span>
            <span onClick={() => removeCard(index)} className='removeButton'>Remove</span>
            <span onClick={() => setDone(index)} className='doneButton'>{isDone ? 'Cancel' : 'Done'}</span>
        </div>
    )
}

export default TodoCard
