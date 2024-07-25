import { useState } from "react";

export function CreateTodo() {
  const[title, setTitle] = useState("");
  const[description, setDescription]=useState("");
  return (
    <div>
      <input type="text" placeholder="title"  onChange={(e)=>{setTitle(e.target.value)}}/> <br /> <br />
      <input type="text" placeholder="description" onChange={(e)=>{setDescription(e.target.value)}}/> <br /> <br />
      <button onClick={()=>{
        fetch("http://localhost:3000/todo", {
          method:"POST",
          body:JSON.stringify({
            title:title,
            description:description,
            completed:false
          }),
          headers:{
          "content-type":"application/json"
          }
        }).then(async(data)=>{
          const result = await data.json();
          alert("Todo Added..");
        })
      }}>Click here</button>
    </div>
  );
}