import { useState } from 'react'
import './App.css'
import useFetch from './components/useFetch'

function App() {

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      <h1>Hello World!</h1>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}

export default App
