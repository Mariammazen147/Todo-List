import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted:false }];
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos=[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }
  return (
    <div className='app'>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;