import React from 'react';

function TodoCard({ todo, toggleTodo }) {
  const { text, completed, id } = todo;

  return (
    <div
      className={`todo-card ${completed ? 'completed' : ''}`}
      onClick={() => toggleTodo(id)}
    >
      {text}
    </div>
  );
}

export default TodoCard;
