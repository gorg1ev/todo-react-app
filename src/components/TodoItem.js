import React, { useContext } from 'react';
import { Theme } from '../App';

function TodoItem({ todo, todos, setTodos }) {
   const theme = useContext(Theme);

   const onCompleteHandler = (e) => {
      todo.completed = !todo.completed;
      setTodos([...todos]);
   };

   const onDeleteHandler = () => {
      setTodos(todos.filter((el) => el.id !== todo.id));
   };

   return (
      <li
         className={`todo-item ${theme.theme ? 'todo-item-theme' : ''} ${
            todo.completed ? 'check' : ''
         }`}
      >
         <button onClick={onCompleteHandler}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth="2"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
               />
            </svg>
         </button>
         <p>{todo.text}</p>
         <button onClick={onDeleteHandler}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth="2"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
               />
            </svg>
         </button>
      </li>
   );
}

export default TodoItem;
