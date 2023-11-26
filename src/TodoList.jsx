import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './Todo.css'

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index, newText) => {
    const newTasks = [...tasks];
    newTasks[index].text = newText;
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="add a new task"
      />
      <button onClick={addTask} className="button add-button"></button>

      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            toggleCompletion={() => toggleCompletion(index)}
            deleteTask={() => deleteTask(index)}
            editTask={(newText) => editTask(index, newText)}
          />
        ))}
      </ul>

      {tasks.length === 0 && <p className='empty'>nothing to see here! enjoy your break!</p>}
    </div>
  );
}

export default TodoList;
