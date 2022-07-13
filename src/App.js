import React, { useState, useEffect } from 'react';

import TodoContainer from './components/TodoContainer';
import './disc/style.css';

export const Theme = React.createContext();
function App() {
   const [theme, setTheme] = useState(
      JSON.parse(localStorage.getItem('theme'))
   );
   useEffect(() => {
      setTheme(JSON.parse(localStorage.getItem('theme')));
   }, [theme]);

   document.body.style.backgroundColor = `${theme ? '#fafafa' : '#161722'}`;

   return (
      <Theme.Provider value={{ theme, setTheme }}>
         <header
            className={`header-bg ${theme ? 'header-bg-theme' : ''}`}
         ></header>
         <TodoContainer />
      </Theme.Provider>
   );
}

export default App;
