import React, { useCallback, useReducer, useMemo } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import todoReducer from "./reducers/reducer";
import Header from "./components/Header";
import Search from "./components/Search";

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [
      { title: "Yemek yapılacak", completed: false },
      { title: "Ders çalışılacak", completed: false },
    ],
    todo: "",
    search: "",
  });

  // console.log(state.todos)

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: state.todo,
    });
  };

  const changeHandle = useCallback((e) => {
    dispatch({
      type: "UPDATE_TODO",
      value: e.target.value,
    });
  }, []);
  const deleteTodo = useCallback((index) => {
    dispatch({
      type: "DELETE_TODO",
      index: index,
    });
  }, []);

  const searchHandle = useCallback((e) => {
    dispatch({
      type: "UPDATE_SEARCH",
      value: e.target.value,
    });
  }, []);

  const toggleTodo = useCallback((index) => {
    dispatch({
      type: "TOGGLE_TODO",
      index,
    });
  }, []);

  const filteredTodos = useMemo(() => {
    return state.todos.filter((todo) =>
      todo.title
        .toLocaleLowerCase("TR")
        .includes(state.search.toLocaleLowerCase("TR"))
    );
  }, [state.search, state.todos]);

  return (
    <>
      <Header />
      <div className="flex justify-center flex-col items-center">
        <Search value={state.search} searchHandle={searchHandle} />
        <AddTodo
          todo={state.todo}
          submitHandle={submitHandle}
          changeHandle={changeHandle}
        />
        <Todos
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </>
  );
}

export default TodoApp;
