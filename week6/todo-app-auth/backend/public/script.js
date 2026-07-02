document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  const response = await fetch("http://localhost:4000/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const result = await response.json();
  if (response.ok) {
    document.getElementById("response-message").innerText =
      result.message || "Signup successfully, please signin";
    document.getElementById("signup-container").style.display = "none";
    document.getElementById("signin-container").style.display = "block";
  } else {
    document.getElementById("response-message").innerText =
      result.message || "Signup failed";
  }
});

document.getElementById("signin-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("signin-username").value;
  const password = document.getElementById("signin-password").value;

  const response = await fetch("http://localhost:4000/user/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const result = await response.json();
  if (response.ok) {
    localStorage.setItem("token", result.token);
    document.getElementById("signin-container").style.display = "none";
    document.getElementById("todo-container").style.display = "block";
    document.getElementById("response-message").innerHTML =
      `Logged in successfully. <a href="#" id="logout-link">Logout</a>`;
    loadTodos();
    document.getElementById("logout-link").addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("token"); // Clear token
      document.getElementById("todo-container").style.display = "none";
      document.getElementById("signin-container").style.display = "block";
      document.getElementById("response-message").innerText = "";
    });
  } else {
    document.getElementById("response-message").innerText =
      result.message || "Signin failed";
  }
});

// Adding Todo on Form Submission
document.getElementById("todo-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const todoInput = document.getElementById("todo-input");
  const todoText = todoInput.value.trim();
  if (!todoText) {
    return;
  }

  const token = localStorage.getItem("token");

  try {
    const response = await fetch("http://localhost:4000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title: todoText }),
    });
    const result = await response.json();
    isAddingTodo = false;

    if (response.ok) {
      todoInput.value = "";
      loadTodos();
    } else {
      console.error(result.msg);
    }
  } catch (error) {
    isAddingTodo = false;
    console.error("Error adding todo:", error);
  }
});

// Load Todos
async function loadTodos() {
  let token = localStorage.getItem("token");

  try {
    const response = await fetch("http://localhost:4000/todo/", {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { todos } = await response.json();
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = '';

    todos.forEach(todo => {
      const listItem = document.createElement("li");
      listItem.textContent = todo.title;

      if(todo.completed){
        listItem.style.textDecoration = "line-through";
      }

      const completeButton = document.createElement("button");
      completeButton.textContent = "Completed";

      completeButton.onclick = () => {
        completeTodo(todo._id, !todo.completed)
      }

      if(!todo.completed){
        listItem.appendChild(completeButton)
      }
      todoList.appendChild(listItem)
    });
  } catch (error) {
    console.error("Error loading todos:", error);
  }
}

// Complete Todo
async function completeTodo(id, completed) {
  let token =  localStorage.getItem("token");
  try {
    await fetch(`http://localhost:4000/todo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({completed})
    })
    loadTodos()
  } catch (error) {
    console.error("Error completing todos:", error);
  }
}


// Toggle between Signup and Signin
console.log(document.getElementById("show-signin"));
document.getElementById("show-signin").addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Show signin")
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('signin-container').style.display = 'block';
});

console.log(document.getElementById("show-signup"));

document.getElementById('show-signup').addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Show signup");
    document.getElementById('signin-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
});
