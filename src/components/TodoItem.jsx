import React from 'react';

const TodoItem = (props) => {

  return (
    <div className='task'>
        <span className="task-title">{props.task.title}</span>
        <div className='task-buttons'>
            <button onClick={() => props.remove(props.task)}>Delete</button>
        </div>
    </div>
  )
}

export default TodoItem