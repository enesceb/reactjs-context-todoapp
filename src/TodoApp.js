import React, { useCallback, useReducer, useMemo, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import todoReducer from "./reducers/reducer";
import Header from "./components/Header";
import Search from "./components/Search";
import TodoFilterFields from "./components/TodoFilterFields";
import { useAuth } from "./context";



function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
    todo: "",
    search: "",
    onlyMe: false,
    filterCompleted: false
  });

  console.log(state.onlyMe)

  const {user} = useAuth()
  useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(state.todos))
	}, [state.todos]);

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: state.todo,
      userId: user.id
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

  const updateOnlyMe = useCallback(() => {
		dispatch({
			type: 'UPDATE_ONLY_ME'
		})
	}, [])

  const updateFilterCompleted = useCallback(value => {
		dispatch({
			type: 'UPDATE_FILTER_COMPLETED',
			value
		})
	}, [])

  const filteredTodos = useMemo(() => state.todos.filter(todo => {
		return (
			todo.title.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR'))
		) && (
			state.onlyMe && user ? todo.userId === user.id : true
		) && (
			state.filterCompleted ? (
				state.filterCompleted === 'completed' ? todo.completed : !todo.completed
			) : true
		)
	}), [state.todos, state.search, state.onlyMe, user, state.filterCompleted])

  return (
    <>
      <Header />
      <div className="flex justify-center flex-col items-center">
        <Search value={state.search} searchHandle={searchHandle} />
        <TodoFilterFields updateOnlyMe={updateOnlyMe} updateFilterCompleted={updateFilterCompleted} filterCompleted={state.filterCompleted} onlyMe={state.onlyMe}/> 
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
