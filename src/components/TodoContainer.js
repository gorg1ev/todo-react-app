import React, { useEffect, useState } from 'react';

import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoContainer() {
   useEffect(() => {
      getLocalTodos();
   }, []);

   const [todos, setTodos] = useState([]);

   useEffect(() => {
      saveLocalTodos();
   }, [todos]);

   const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
   };

   const getLocalTodos = () => {
      setTodos(JSON.parse(localStorage.getItem('todos')));
   };

   return (
      <main className="todo-container">
         <TodoHeader />
         <TodoInput
            todos={todos}
            setTodos={setTodos}
            saveLocalTodos={saveLocalTodos}
         />
         {todos.length !== 0 && <TodoList todos={todos} setTodos={setTodos} />}
         <p className="drag-n-drop">Drag and drop to reorder list</p>
      </main>
   );
}

export default TodoContainer;
