// import { useState, useMemo } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const [text, setText] = useState("")

//   // const sqaure = count * count;
//   // console.log("Inside App comp");
  

//   const slowFunction = (count) => {
//     console.log("Calculating...........");
//     for(let i = 0; i < 100000000000000; i++) { return }
//     return count * count;
//   }
//   // const sqaure = slowFunction(count);


//   const sqaure = useMemo(() => {
//     return slowFunction(count)
//   }, [count]);


//   return (
//     <div>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <h2>{sqaure}</h2>
//       <button onClick={() => setCount(count + 1)} >
//         Increment
//       </button>
//     </div>
//   )
// }

// export default App


// example 2
import { useState, useMemo, memo } from 'react'
import './App.css'

const Header = memo(({user}) => {
  console.log("Header rendered")
  return <h1>{user.name}</h1>
})
const Header1 = memo(({user}) => {
  console.log("Header 1 rendered")
  return <h1>{user.name}</h1>
})

function App() {
  const [count, setCount] = useState(0)

  // const user = () => {
  //   return {name: "Suleiman"}
  // };
  
  const user = {name: "Suleiman"};


  const user1 = useMemo(() => {
    return {name: "Suleiman 1"}
  }, []);


  return (
    <div>
      <button onClick={() => setCount(count + 1)} >
        Increment {count}
      </button>

      <Header user={user}/>
      <Header1 user={user1}/>
    </div>
  )
}

export default App
