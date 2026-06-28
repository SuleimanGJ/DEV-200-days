import express from "express";
const app = express();
import fs from 'fs'
import path from "path"
import { logger } from './middleware/logger.js'
import { validateTodo } from './middleware/validateTodo.js'
const todos = path.resolve("./data/todos.json")

app.use(express.json());
app.use(logger)


app.get("/todos", (req, res, next) => {
    fs.readFile(todos, "utf-8", (err, data) => {
        if (err) {
          return next(err)
        }
        try {
          const allTodos = JSON.parse(data);
          res.json(allTodos);
        } catch (err) {
          next(err);
        }
    });
});


app.get("/todos/:id", (req, res, next) => {
    fs.readFile(todos, "utf-8", (err, data) => {
      if (err) {
        return next(err);
      }
      let allTodos = JSON.parse(data);
      const id = Number(req.params.id);
      const todo = allTodos.find((t) => t.id === id);
      const error = new Error("Todo not found");
      error.statusCode = 404;

      if (!todo) {
        return next(error);
      }
      res.json(todo);
    });
});


app.post("/todos", validateTodo, (req, res, next) => {
    fs.readFile(todos, "utf-8", (err, data) => {
        if (err) {
        return next(err);
        }
        let allTodos = JSON.parse(data);
        const lastId = allTodos[allTodos.length - 1]?.id || 0;
        
        const newTodo = {
          id: lastId + 1,
          title: req.body.title,
          completed: false,
        };
        allTodos.push(newTodo);
        
        fs.writeFile(todos, JSON.stringify(allTodos, null, 2), (err) => {
          if (err) {
            return next(err);
          }
          res.json(newTodo);
        });
    });
});


app.put("/todos/:id", validateTodo, (req, res, next) => {
    fs.readFile(todos, "utf-8", (err, data) => {
      if (err) {
        return next(err);
      }
        let allTodos = JSON.parse(data);
        const id = Number(req.params.id);
        const index = allTodos.findIndex((t) => t.id === id);
        const error = new Error("Todo not found");
        error.statusCode = 404;

        if (index === -1) {
          return next(error);
        }
      const updatedTodo = {
        id: allTodos[index].id,
        title: req.body.title ?? allTodos[index].title,
        completed: req.body.completed ?? allTodos[index].completed,
      };
      allTodos[index] = updatedTodo;
    
      fs.writeFile(todos, JSON.stringify(allTodos, null, 2), (err) => {
        if (err) {
          return next(err)
        }
        res.json({
          message: "Todo updated",
          todo: updatedTodo,
        });
      });
    });
});



app.delete("/todos/:id", (req, res, next) => {
    fs.readFile(todos, "utf-8", (err, data) => {
        if (err) {
          return next(err)
        }
        let allTodos = JSON.parse(data);
        const id = Number(req.params.id);
        const index = allTodos.findIndex((t) => t.id === id);

        const error = new Error("Todo not found");
        error.statusCode = 404;

        if (index === -1) {
          return next(error);
        }
        const deletedTodo = allTodos[index];
        allTodos.splice(index, 1);
        fs.writeFile(todos, JSON.stringify(allTodos, null, 2), (err) => {
            if (err) {
                return next(err);
            }
            res.json({
              message: "Todo deleted",
              todo: deletedTodo,
            });
            },
        );
    })
})

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3000");
});
