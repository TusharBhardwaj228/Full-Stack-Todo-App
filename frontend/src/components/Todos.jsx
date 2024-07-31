export function Todos({todo}){
  return (
    <div>
    {todo.map((t)=>{
      return(
        <div>
          <h1>{t.title}</h1>
          <h2>{t.description}</h2>
          <button onClick={()=>{
            fetch("http://localhost:3000/completed",{
              method:"PUT",
              body:JSON.stringify({
                id:t._id
              }),
              headers:{
                "content-type":"application/json"
              }
            }).then(async(data)=>
              {const d = await data.json();
                alert("updated");
            })
          }}>{t.completed==false?"Mark as done":"Completed"}</button>
        </div>
      )
    })}
    </div>
  )
}