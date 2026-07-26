import { useState } from "react";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-center mt-3">
        <h2 className="text-3xl">Parent Component</h2>
        <small>Not using the count state</small>
      </div>

      <ChildComponent count={count} setCount={setCount} />
    </>
  );
};


const ChildComponent = ({count, setCount}) => {

  return (
    <>
      <div className="text-center mt-3">
        <h2 className="text-3xl">Child Component</h2>
        <small>Not using the count state</small>
      </div>

      <GrandChildComponent count={count} setCount={setCount} />
    </>
  );
}


const GrandChildComponent  = ({count, setCount}) => {

  return (
    <>
      <div className="text-center mt-3">
        <h2 className="text-3xl">Grand Child Component</h2>
        <small>Not using the count state</small>
      </div>
      <div className="text-center">
       <h3 className="text-2xl">Count is: {count}</h3>
       <button
         onClick={() => setCount(count + 1)}
         className="bg-pink-600 p-2 rounded text-white"
       >
         Increase Count
       </button>
     </div>
    </>
  );
};

export default ParentComponent;
