import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <input
      type="text"
      className="todo-input"
      placeholder="Add a new TODO..."
      value={text}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
    />
  );
}

export default TodoInput;
