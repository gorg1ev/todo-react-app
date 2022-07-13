import React, { useEffect, useState } from 'react';

import TodoItem from './TodoItem';
import TodoFeatures from './TodoFeatures';

function TodoList({ todos, setTodos }) {
   const [filteredTodos, setFilteredTodos] = useState([]);
   const [filter, setFilter] = useState('all');

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
      <div className="todo-list">
         <ul>
            {filteredTodos.map((todo) => (
               <TodoItem
                  key={todo.id}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
               />
            ))}
         </ul>
         <TodoFeatures
            setFilter={setFilter}
            todos={todos}
            setTodos={setTodos}
         />
      </div>
   );
}

export default TodoList;
