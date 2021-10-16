import React from 'react';

import '../TodoCard/TodoCard.css';

const TodoCard = ({ card }) => {
    return (
        <div className='card'>
            {card}
        </div>
    )
}

export default TodoCard
