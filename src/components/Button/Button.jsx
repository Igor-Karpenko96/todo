import React from 'react'

const Button = ({ setNewCard }) => {
    return (
        <div>
            <span onClick={setNewCard}>add new task</span>
        </div>
    )
}

export default Button
