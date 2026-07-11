import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
const [todos, setTodos] = useState([])

function AddTodo(){
  setTodos([...todos, {
    id: Date.now(),
    title: title.trim(),
    description: description.trim(),
    completed: false
  }])
}

function DoneTodo(id){
  setTodos(
    todos.map(t => (
      t.id == id ? {...todos, completed: !t.completed} : t
    ))
  )
}
function DeleteTodo(id){
  setTodos([...todos.filter(t => t.id !== id)])
}
  return (
    <>
    <div>
      <input value={title} type="text" placeholder="enter title" onChange={e => setTitle(e.target.value)}/>
      <input type="text" placeholder="enter description" value={description} onChange={e => setDescription(e.target.value)}/>
      <button onClick={AddTodo}>Add Todo</button>
    </div>
      {todos.map(todo => (
        <div key={todo.id}>
          <TodoItem todo={todo} onDelete={DeleteTodo} onDone={DoneTodo} />
        </div>
      ))}
    </>
  )
}

function TodoItem({todo, onDone, onDelete}){
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

export default App
