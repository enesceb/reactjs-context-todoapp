
const TodoItem = ({deleteTodo, todo, index, toggleTodo}) => {

  return (
    <li className='p-5 w-[600px] border-b bg-teal flex items-center justify-between '  >
      {todo.title}
      <div className='flex gap-x-4'>
        <button className='text-sm rounded-md h-10 px-4 bg-red-100 text-red-700' onClick={()=> deleteTodo(index)}>SİL</button>
        <button className='text-sm rounded-md bg-blue-400 h-10 px-4 text-white ' onClick={()=> toggleTodo(index)}>
           {todo.completed ? 'Tamamlandı' : 'Tamamla'}
        </button>
      </div>
    </li>
  )
}

export default TodoItem