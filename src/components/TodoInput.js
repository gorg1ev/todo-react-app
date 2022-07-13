import React, { useState, useContext } from 'react';
import { nanoid } from 'nanoid';

import { Theme } from '../App';

function TodoInput({ todos, setTodos, saveLocalTodos }) {
   const theme = useContext(Theme);
   const [inputValue, setInputValue] = useState('');

   const onChangeHandler = (e) => {
      setInputValue(e.target.value);
   };

   const onSubmitHandler = (e) => {
      e.preventDefault();

      if (!inputValue.trim()) return;

      setTodos([
         ...todos,
         { text: inputValue.toString(), completed: false, id: nanoid() },
      ]);

      setInputValue('');
   };

   return (
      <form
         onSubmit={onSubmitHandler}
         className={`todo-input ${theme.theme ? 'todo-inpu-theme' : ''}`}
      >
         <span></span>
         <input
            onChange={onChangeHandler}
            value={inputValue}
            type="text"
            placeholder="Create new todo..."
         />
      </form>
   );
}

export default TodoInput;
