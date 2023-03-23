import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ tasks, remove }) => {


    return (
        <div className='todo-list'>
            {tasks.map((task) => 
                <TodoItem remove={remove} task={task} />
            )}
        </div>
    )
    }

export default TodoList