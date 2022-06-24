import React from "react";
import TodoItem from "./TodoItem";


const Todos = ({ deleteTodo, todos, toggleTodo }) => {

  return (
    <>
      <div className="flex mb-4 items-center">
        <ul className="w-full text-gray-500">
          {todos.map((todo, index) => (
            <TodoItem
              todo={todo}
              deleteTodo={deleteTodo}
              key={index}
              index={index}
              toggleTodo={toggleTodo}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
export default Todos;
