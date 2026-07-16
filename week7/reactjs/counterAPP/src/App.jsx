import { useState, useEffect } from 'react'

function App() {

  return (
    <>
    <Counter />
    </>
  )
}

function Counter(){
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    console.log("Loaded from localstorage and Current count:", savedCount);
    return savedCount !== null ? Number(savedCount) : 0;
    // if (savedCount !== null) {
    //   setCount(Number(savedCount));
    // }
  });

  useEffect(() => {
    console.log("Saved:", count)
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>Increase</button>
        <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
      </div>
    </div>
  );
}

export default App
