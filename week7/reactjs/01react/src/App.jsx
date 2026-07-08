import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount(count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>
    </>
  )
}

export default App
