import { useState } from "react";

function App() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("");
  return (
    <>
      <div className="">
        <div>
          <input type="text" onChange={e => setTitle(e.target.value)} placeholder="title"/>
          <input type="text" onChange={e => setDescription(e.target.value)} placeholder="description"/>
          <button onClick={async () => {
            await fetch("http://localhost:3000/todos", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({title, description})
            })
          }}>Add Todo</button>
        </div>
      </div>
    </>
  );
}

export default App;
