import TodoItem from "./TodoItem"

export default function Todos(){
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
    retrun (
        <div>
            <div>
            <input value={title} type="text" placeholder="enter title" onChange={e => setTitle(e.target.value)}/>
            <input type="text" placeholder="enter description" value={description} onChange={e => setDescription(e.target.value)}/>
            <button onClick={AddTodo}>Add Todo</button>
        </div>
            {(todos.length === 0 ?
            (<p style={{fontSize: "25px"}}>No tasks here</p>) :
            (todos.map(todo => (
            <div key={todo.id}>
            <TodoItem todo={todo} onDelete={DeleteTodo} onDone={DoneTodo} />
            </div>
            )))
            )}
        </div>
    )
}