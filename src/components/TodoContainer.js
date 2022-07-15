import React, { useEffect, useState } from 'react';

import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFeatures from './TodoFeatures';

function TodoContainer() {
   useEffect(() => {
      getLocalTodos();
   }, []);

   const [filteredTodos, setFilteredTodos] = useState([]);
   const [todos, setTodos] = useState([]);
   const [filter, setFilter] = useState('all');

   useEffect(() => {
      saveLocalTodos();
   }, [todos]);

   const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
   };

   const getLocalTodos = () => {
      setTodos(JSON.parse(localStorage.getItem('todos')));
   };

   const filterHandler = () => {
      switch (filter) {
         case 'completed':
            setFilteredTodos(todos.filter((todo) => todo.completed));
            break;
         case 'active':
            setFilteredTodos(todos.filter((todo) => !todo.completed));
            break;
         default:
            setFilteredTodos(todos);
            break;
      }
   };

   useEffect(() => {
      filterHandler();
   }, [filter, todos]);

   return (
      <main className="todo-container">
         <TodoHeader />
         <TodoInput
            todos={todos}
            setTodos={setTodos}
            saveLocalTodos={saveLocalTodos}
         />
         {todos.length !== 0 && (
            <TodoList
               todos={todos}
               setTodos={setTodos}
               filteredTodos={filteredTodos}
            />
         )}
         {todos.length !== 0 && (
            <TodoFeatures
               setFilter={setFilter}
               todos={todos}
               setTodos={setTodos}
            />
         )}
         {todos.length !== 0 && (
            <p className="drag-n-drop">Drag and drop to reorder list</p>
         )}
      </main>
   );
}

export default TodoContainer;
