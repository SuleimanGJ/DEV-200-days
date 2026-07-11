import { useState } from "react";

function Todos({todos}) {
  return (
    <>
    {todos.map((todo) => {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <button
              onClick={async () => {
                const res = await fetch("http://localhost:3000/completed", {
                  method: "PUT",
                  body: JSON.stringify({
                    id: todo.id,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                });
                const data = await res.json();
                alert("Todo is Completed");
              }}
            >
              {todo.completed === true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
    })}
</>
  );
}
export { Todos };
