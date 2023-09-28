import React from 'react';
import TodoCard from './TodoCard';

function TodoList({ todos, toggleTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
}

export default TodoList;
