import { useRef, useEffect, useState } from "react";

function usePrevious(prop) { // Previous render value
  const ref = useRef();
  useEffect(() => { // it remember previous render not previous value
    ref.current = prop;
  });
  return ref.current;  
}
// usePrevious -> The hook is not remembering the previous value of number. but It is remembering the value from the previous render.

// Runs after every render.
// If any unrelated state changes (like anything), the effect still runs.
// It tracks the value from the previous render, not necessarily the previous value.


// How it works

// Every time the component renders:

// 1 Render starts.
// 2 Return the old ref.current.
// 3 React paints.
// 4 useEffect runs.
// 5 Store the latest value.



function useAlternativePrevious(value, initial) { // Previous changed value
  const ref = useRef({ target: value, previous: initial });
  if (ref.current.target !== value) {
    ref.current.previous = ref.current.target;
    ref.current.target = value;
  }
  return ref.current.previous;


// simplification
//   const currentRef = useRef(value);
//   const previousRef = useRef();
//   console.log(`Before Current Ref: ${currentRef.current} & Previous Ref: ${previousRef.current}`)
  
//   if (currentRef.current !== value) { // Notice that we copy the old current into previous before replacing current.
//     previousRef.current = currentRef.current;
//     currentRef.current = value;
//   }
//   console.log(`Before Current Ref: ${currentRef.current} & Previous Ref: ${previousRef.current}`)

//   return previousRef.current;

// // The sequence is:
// // 1 Compare the old current with the new value.
// // 2 If they're different:
// //    Copy the old current into previous.
// //    Replace current with the new value.
}

// The mental model
// Version 1: "What was this value during the last render?"
// Version 2: "What was this value before it most recently changed?

export default function App() {
  const [number, setNumber] = useState(0);
  const [anything, setAnything] = useState(false);
  const prevNumber = usePrevious(number);

  const inc = () => setNumber((n) => n + 1);
  const dec = () => setNumber((n) => n - 1);
  const triggerRerender = () => setAnything((b) => !b);

  const [numberAlter, setNumberAlter] = useState(0);
  const [anythingAlter, setAnythingAlter] = useState(false);
  const prevNumberAlter = useAlternativePrevious(numberAlter);

  const incAlter = () => setNumberAlter((n) => n + 1);
  const decAlter = () => setNumberAlter((n) => n - 1);
  const triggerRerenderAlter = () => setAnythingAlter((b) => !b);

  return (
    <div className="App" style={{display: "flex", justifyContent: "space-around"}}>
      <div>
          <h1>usePrevious</h1>
          <button onClick={dec}>-</button>
          <button onClick={inc}>+</button>
          <button onClick={triggerRerender}>Cause the glitch</button>
          <br />
          <br />
          Current number: {number}
          <br />
          Previous number: {prevNumber}
      </div>
      <div>
          <h1>useAlternativePrevious</h1>
          <button onClick={decAlter}>-</button>
          <button onClick={incAlter}>+</button>
          <button onClick={triggerRerenderAlter}>Cause the glitch</button>
          <br />
          <br />
          Current number: {numberAlter}
          <br />
          Previous number: {prevNumberAlter}
      </div>
    </div>
  );
}
