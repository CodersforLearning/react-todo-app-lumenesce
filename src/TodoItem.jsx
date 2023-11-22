import React, { useState } from 'react';
import './Todo.css'

function TodoItem({ task, toggleCompletion, deleteTask, editTask }) {
    const buttonClass = task.completed ? 'complete-button' : 'incomplete-button';

    const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(editedText);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
        <button className={`button ${buttonClass}`} onClick={toggleCompletion}></button>
        {isEditing ? (
        <input type="text" value={editedText} onChange={handleChange} />
      ) : (
        <span className="todo-text">{task.text}</span>
      )}

      <div>
        {isEditing ? (
          <button className="button save-button" onClick={handleSave}>Save</button>
        ) : (
          <>
            <button className="button edit-button" onClick={handleEdit}></button>
            <button className="button delete-button" onClick={deleteTask}></button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;