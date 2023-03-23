import { useState } from "react"

const TodoForm = ({ create }) => {
    const [task, setTask] = useState({title: ''})

    const addNewTask = (e) => {
        e.preventDefault()
        const newTask = {
            ...task, id: Date.now()
        }
        create(newTask)
        setTask({title: ''})
    }

return (
<div>
    <form className="todo-form">
        <input 
        type="text" 
        placeholder="Write down task"
        value={task.title}
        onChange={e => setTask({...task, title: e.target.value})}
        />
        <button onClick={addNewTask}>Add task</button>
    </form>
</div>
  )
}

export default TodoForm