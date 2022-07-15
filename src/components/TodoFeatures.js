import React, { useState, useEffect, useContext } from 'react';

import { Theme } from '../App';

function TodoFeatures({ setFilter, todos, setTodos }) {
   const theme = useContext(Theme);
   const [count, setCount] = useState([]);

   useEffect(() => {
      setCount(todos.filter((todo) => !todo.completed));
   }, [todos]);

   const onClickFilter = (e) => {
      if (!e.target.closest('button')) return;

      e.target
         .closest('div')
         .querySelector('.active')
         .classList.remove('active');

      e.target.closest('button').classList.add('active');

      setFilter(e.target.closest('button').textContent.toLowerCase());
   };

   const onCompletedClickHandler = () => {
      setTodos(todos.filter((todo) => !todo.completed));
   };

   return (
      <div
         className={`todo-features ${theme.theme ? 'todo-features-theme' : ''}`}
      >
         <p>{count.length} items left</p>
         <div onClick={onClickFilter}>
            <button className="active">All</button>
            <button>Active</button>
            <button>Completed</button>
         </div>
         <button onClick={onCompletedClickHandler}>Clear Completed</button>
      </div>
   );
}

export default React.memo(TodoFeatures);
