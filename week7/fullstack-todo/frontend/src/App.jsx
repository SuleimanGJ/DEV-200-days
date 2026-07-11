import { useEffect, useState } from 'react';
import './App.css'
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])
  async function useTodos() {
    const res = await fetch("http://localhost:3000/todo");
    const data = await res.json();
    console.log(data)
    setTodos(data.todo);
  }
  useEffect(() => {
    useTodos();
  }, [])
  return (
    <>
      <h1>Frontend</h1>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  );
}

export default App
