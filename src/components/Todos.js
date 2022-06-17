import React from 'react'
import { useSite } from '../context/SiteContext'
import TodoItem from './TodoItem'


const Todos = ( {deleteTodo, todos}) => {
  const {theme} = useSite()
  return (
  <>
    tema = {theme}
    <ul>
      {todos.map((todo, index) =>  
       <TodoItem todo={todo} deleteTodo={deleteTodo} key={index} index={index}/>
      )}
    </ul>
  </>
  )
}

export default Todos