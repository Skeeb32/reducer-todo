import React from 'react';

const ClearTodo = (props) => {
    console.log("props ClearTodo", props)
    return <button className="clear-btn"
        type="button"
        
        onClick={(e) => {
            e.preventDefault()
            props.dispatch({ type: 'REMOVE_TODO', payload: props.todoList.todos })
        }}
        >
            Clear Completed Todos
    </button>
}

export default ClearTodo;