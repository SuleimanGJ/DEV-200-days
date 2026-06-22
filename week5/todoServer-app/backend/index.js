import express from "express";
// import fs from "fs"; // callback-based
import fs from "fs/promises"; // promise-based
const app = express();

app.use(express.json());

function findIndex(array, id) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return i;
    }
}
return -1;
}

function removeAtIndex(array, index) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== index) {
      newArray.push(array[i]);
    } 
}
return newArray;
}


app.get("/todos", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(404).send("Todo not found");
    }
    res.status(200).json(JSON.parse(data));
  });
});

app.get("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(404).send("Todo not found");
    }

    let todos = JSON.parse(data);
    let todoIndex = findIndex(todos, Number(req.params.id));
    if (todoIndex === -1) {
      return res.status(404).send("Todo not found");
    }
    res.status(200).json(todos[todoIndex]);
  });
});

app.post("/todos", (req, res) => {
  let newTodo = {
    id: Math.floor(Math.random() * 10000),
    title: req.body.title,
    description: req.body.description,
  };
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(404).send("Todo not found");
    }
    let todos = JSON.parse(data);
    todos.push(newTodo);

    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) {
        return res.status(404).send("Todo not found");
      }
      res.status(201).json(newTodo);
    });
  });
});



app.put("/todos/:id", (req, res) => {

  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(404).send("Todo not found");
    }
    let todos = JSON.parse(data);
    let todoIndex = findIndex(todos, Number(req.params.id));
    if (todoIndex === -1) {
      return res.status(404).send("Todo not found");
    }
      let updatedTodo = {
        id: todos[todoIndex].id,
        title: req.body.title,
        description: req.body.description,
      };
      todos[todoIndex] = updatedTodo;
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) {
        return res.status(404).send("Todo not found");
      }
      res.status(200).json(updatedTodo);
    });
  });
});


app.delete("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(404).send("Todo not found");
    }

    let todos = JSON.parse(data);
    let todoIndex = findIndex(todos, Number(req.params.id));
    if (todoIndex === -1) {
      return res.status(404).send("Todo not found");
    }
    todos = removeAtIndex(todos, todoIndex)
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
    if (err) {
        return res.status(404).send("Todo not found");
    }
    res.status(200).json({
      msg: `Delete`,
    });
    });
  });
});


app.listen(3000, () => {
  console.log(`App is running on http://localhost:3000`);
});
