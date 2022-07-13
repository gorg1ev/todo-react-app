import React, { useContext } from 'react';

import { Theme } from '../App';

function TodoHeader() {
   const theme = useContext(Theme);

   const toggleTheme = () => {
      theme.setTheme((theme) => !theme);
      localStorage.setItem('theme', JSON.stringify(!theme.theme));
   };

   return (
      <header
         className={`todo-header ${theme.theme ? 'todo-header-theme' : ''}`}
      >
         <h1>Todo</h1>
         <button onClick={toggleTheme}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth="2"
            >
               <path strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </button>
      </header>
   );
}

export default TodoHeader;
