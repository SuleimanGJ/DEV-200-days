

export default function TodoItem({todo, onDone, onDelete}){
  const {id, title, description, completed} = todo
  return (
    <div style={completed ? { textDecoration: "line-through" } : null}>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={() => onDone(id)}>Done</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}