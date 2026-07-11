import { useState } from "react"


function CreateTodo(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
      <div>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value) }
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={async () => {
            const res = await fetch("http://localhost:3000/todo", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: title,
                description: description,
              })
            });
            console.log(title, description);
            const data = await res.json();
            console.log(data)
            alert("Todo is added")
          }}
        >
          Add Todo
        </button>
      </div>
    );
}

export { CreateTodo }