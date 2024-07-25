export function Todos({todo}){
  return (
    <div>
    {todo.map((t)=>{
      return(
        <div>
          <h1>{t.title}</h1>
          <h2>{t.description}</h2>
          <button>{t.completed==false?"Mark as done":"Completed"}</button>
        </div>
      )
    })}
    </div>
  )
}