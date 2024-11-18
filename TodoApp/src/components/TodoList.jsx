import React from "react";

const TodoList = ({text , id , key ,deleteTodo , updateTodo}) => {
  return (
    <div className="h-10 w-96 mx-2">
      <input type="text"  className="h-7 w-60  border-none outline-none rounded-lg m-1 p-3" value={ text} readOnly />
      <button className="h-7 px-1 rounded-lg  bg-slate-100 text-black m-1" onClick={()=>{updateTodo(id)}}>
        Update
      </button>
      <button className="h-7 px-1 rounded-lg bg-slate-100 text-black" onClick={()=>{deleteTodo(id)}}>
        Delete
      </button>
    </div>
  );
};

export default TodoList;
