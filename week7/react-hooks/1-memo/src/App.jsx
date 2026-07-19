// import { memo, useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>
//         Counter:{count}
//       </button>
//       <Child name="Suleiman" />
//     </>
//   )
// }

// // // without memo
// // const Child = ({ name }) => {
// //   console.log("Child rendered");
// //   return <div>{name}</div>;
// // };

// // with memo
// const Child = memo(({ name }) => {
//   console.log("Child rendered")
//   return <div>{name}</div>;
// });

// // // with memo and custom comparison
// // const Child = memo(({ name }) => {
// //   console.log("Child rendered")
// //   return <div>{name}</div>;
// // },
// // (prevProps, nextProps) => {
// //   console.log(prevProps, nextProps)
// //   return prevProps.name === nextProps.name
// // });


// export default App



// example 2
import { memo, useState } from "react";


function App() {
  const [titles, setTitles] = useState("My name is suleiman");
  const changeTitles = () => {
    setTitles("My name is " + Math.random()*100)
  }

  return (
    <>
      <button onClick={changeTitles}>ChangeTheFirstTitle</button>
      <Header title={titles} />
      <Header title="My name is Suleiman" />
      <Header title="My name is Suleiman" />
      <Header title="My name is Suleiman" />
    </>
  );
}

// // without memo
// const Header = ({ title }) => {
//   console.log("Header rendered");
//   return <div>{title}</div>;
// };

// // with memo - compares prevProps and nextProps
// const Header = memo(({ title }) => {
//   // console.log("Header rendered");
//   console.log("Rendered: ", title);
//   return <div>{title}</div>;
// });

// with memo and custom comparison
const Header = memo(({ title }) => {
  console.log("Header rendered")
  return <div>{title}</div>;
},
(prevProps, nextProps) => {
  console.log(prevProps, nextProps)
  return prevProps.title === nextProps.title
});

export default App;

