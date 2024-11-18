import React from "react";
import TodoList from "./components/todolist";
import {useState , useRef} from "react"

const App = () => {

const [todos , setTodos] = useState([])
const inputRef = useRef(null)
  
const addTodo = ()=>{
  const data = inputRef.current?.value?.trim()

  if(!data) return;

  const todo = {
    text: data,
    id: Date.now(),
    isCompleted: false
  }

  setTodos([...todos, todo])
  inputRef.current.value =""

}
 
const deleteTodo = (id) =>{
  setTodos((prev) =>{
    return prev.filter((value)=> value.id !== id)
  })
}

const updateTodo = (id) =>{
  const newData = prompt()
  if(newData?.trim() ==="") return;

  setTodos((prev) =>{
       return prev.map((value) =>{
        if (value.id === id){
          value.text = newData 
        }
        return value  
      })
  })

 
}

  return (
    <div className="h-screen w-screen  flex justify-center items-center  flex-col gap-y-4  bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-neutral-700 via-violet-600 to-neutral-600">
      <div className="flex gap-x-2">
        <input
          type="text"
          className="h-10 w-80 border-none outline-none rounded-lg px-3 ring-0 hover:ring-2 hover:ring-black "ref={inputRef}
        />
        <button className="h-10 px-2 bg-slate-300 text-black border-none outline-none rounded-lg  ring-0 hover:ring-2 hover:ring-black font-bold" onClick={addTodo}>
          Add
        </button>
      </div>
      <div className="h-96 w-96 rounded-lg bg-gradient-to-b from-gray-600 via-neutral-800 to-indigo-700  ring-0 hover:ring-2 hover:ring-white">
       {
        todos.map((value ,index) =>{
          return <TodoList  text={value.text} key={index} id={value.id } deleteTodo={deleteTodo} updateTodo={updateTodo} />
        }) 
       }
      </div>
    </div>
  );
};

export default App;
