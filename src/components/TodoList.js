import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import TodoItem from './TodoItem';

function TodoList({ todos, setTodos, filteredTodos }) {
   const handlerOnDragEnd = (e) => {
      if (!e.destination) return;

      const items = Array.from(todos);
      const [reorderItems] = items.splice(e.source.index, 1);
      items.splice(e.destination.index, 0, reorderItems);

      setTodos(items);
   };

   return (
      <div className="todo-list">
         <DragDropContext onDragEnd={handlerOnDragEnd}>
            <Droppable droppableId="droppable">
               {(provided) => (
                  <ul {...provided.droppableProps} ref={provided.innerRef}>
                     {filteredTodos.map((todo, index) => (
                        <Draggable
                           key={todo.id}
                           draggableId={todo.id}
                           index={index}
                        >
                           {(provided) => {
                              return (
                                 <TodoItem
                                    todo={todo}
                                    todos={todos}
                                    setTodos={setTodos}
                                    provided={provided}
                                    innerRef={provided.innerRef}
                                 />
                              );
                           }}
                        </Draggable>
                     ))}
                     {provided.placeholder}
                  </ul>
               )}
            </Droppable>
         </DragDropContext>
      </div>
   );
}

export default TodoList;
