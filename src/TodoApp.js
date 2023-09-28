import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false, id: Date.now() }]);
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };
  
  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div className="todo-app">
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <button className="reset-button" onClick={clearTodos}>Reset</button>
    </div>
  );
}

export default TodoApp;
