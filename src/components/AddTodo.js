import React from "react";
import { useAuth } from "../context";

function AddTodo({ submitHandle, changeHandle, todo }) {
  const  {user} = useAuth()
  return (
    <form className="flex justify-center items-center mt-4 bg-white rounded  ">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker "
        type="text"
        value={todo}
        onChange={changeHandle}
    
      />
      <button
        className="h-10 rounded-2xl bg-blue-600 text-white text-sm px-8 disabled:opacity-20 disabled:cursor-not-allowed "
        disabled={!todo || !user}
        onClick={submitHandle}
        type="submit"
      >
        Ekle
      </button>
    </form>
  );
}

export default AddTodo;
