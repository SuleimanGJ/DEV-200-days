import { useState } from 'react'
import './App.css'
// import useFetch from './components/useFetch'
import usePrev from './components/usePrev'


// ------------- useFetch --------------------
// useFetch example
// function App() {

//   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

//   return (
//     <>
//       <h1>Hello World!</h1>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// }

// ------------- usePrev --------------------
// usePrev example
function App() {

  const [state, setState] = useState(0)
  const prevState = usePrev(state);

  return (
    <div>
      <h1>Hello World!</h1>
      <h3>Current State Value: {state}</h3>
      <button onClick={() => setState(s => s + 1)}>Increment</button>
      <h3>Previous State Value: {prevState}</h3>
    </div>
  );
}

export default App
