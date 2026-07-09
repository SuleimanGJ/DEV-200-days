import { useState } from 'react'
import './App.css'
import CondRendering from './components/CondRendering';
import ListRendering from './components/ListRendering';
import ListFilter from './components/ListFilter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <ListFilter />
        <ListRendering />
        <CondRendering />
        <Button count={count} setCount={setCount} />
          <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
      </section>
    </>
  )
}

function Profile() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

function Button({count, setCount}){
  return (
    <>
      <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
    </>
  )
}

export default App
