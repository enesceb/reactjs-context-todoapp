import React, { useRef, useState , useReducer} from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import todoReducer from "./reducers/reducer";
import Header from "./components/Header"



function TodoApp(){

    const [state, dispactch] = useReducer(todoReducer,{
        todos: [],
        todo: '',
        search: ''
      })
    
    
      const submitHandle = e =>{
        e.preventDefault()
       dispactch({
        type: 'ADD_TODO',
        todo: state.todo
    
       })
      }
      
      const changeHandle = e => {
    
        dispactch({
          type: 'UPDATE_TODO',
          value: e.target.value
        })
      }
      const deleteTodo = index => {
     
        dispactch({
          type: 'DELETE_TODO',
          index: index
        })
      }
    
      const searchHandle = (e) => {
        dispactch({
          type: "UPDATE_SEARCH",
          value: e.target.value
        })
      }
    
      const filteredTodos = state.todos.filter(todo => todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR')))
    
    
     console.log(filteredTodos); 

     return(
        <>
        <Header/>
          <AddTodo todo={state.todo} submitHandle={submitHandle} changeHandle={changeHandle}/>
      <input type="text" placeholder="Todolarda ara" value={state.search} onChange={searchHandle}></input>
      <hr></hr>
      <Todos todos={filteredTodos} deleteTodo={deleteTodo}/>
        </>
     )

}

export default TodoApp;