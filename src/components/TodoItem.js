import React from 'react'

const TodoItem = ({deleteTodo, todo, index}) => {
  return (
    <li onClick={()=> deleteTodo(index)} >{todo}</li>
  )
}

export default TodoItem