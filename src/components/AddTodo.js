import React from 'react'

function AddTodo({submitHandle, changeHandle, todo}) {
  return (
    <form>
    <input type="text" value={todo} onChange={changeHandle}/>
    <button disabled={!todo} onClick={submitHandle} type="submit">Ekle</button>
  </form>
    )
}

export default AddTodo