import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() { 
  const [tasks, setTasks] = useState([]) 

  const createTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const removeTask = (task) => {
    setTasks(tasks.filter(p => p.title !== task.title))
  }

  return (
    <div className="todo">
      <h1>What Should I Do Today?</h1>
      <TodoForm create={createTask} />
      <TodoList tasks={tasks} remove={removeTask} />
    </div>
  );
}

export default App;
