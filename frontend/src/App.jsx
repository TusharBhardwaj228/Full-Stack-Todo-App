import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/Createtodo.jsx'
import { Todos } from './components/Todos.jsx';

function App() {
  const[todo, todos]=useState([]);
  fetch("http://localhost:3000/todos").then(async(data)=>{
    const result=await data.json();
    todos(result);
  })

  return (
    <>
      <div>
        <CreateTodo></CreateTodo>
        <Todos todo={todo}></Todos>
      </div>
    </>
  )
}

export default App
