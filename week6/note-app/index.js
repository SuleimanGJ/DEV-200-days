import express from "express";
import path from "path";
import { authMiddleware } from "./middleware.js";
import jwt from "jsonwebtoken";
let secret = "iloveyou";
const app = express();

app.use(express.json());



// Header must contain - Authorization: Bearer <token>
// Token ganerate from jwt
// before generating token you must - sign jwt with your secret

let notes = [];
let users = [
  {
    username: "suleiman",
    password: 123123,
  },
];

app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  const userExits = users.find((u) => u.username === username && u.password === password);
  if (userExits) {
    return res.json({
      msg: "User with this username & password exists",
    });
  }
  users.push({
    username,
    password,
  });
  res.json({
    msg: "You signed up",
  });
});

app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({
      msg: "Input valid username and password",
    });
  }

  const userExits = users.find(
    (u) => u.username === username
  );

  if (!userExits) {
    return res.json({
      msg: "Incorrect credential",
    });
  }
  const token = jwt.sign({ username }, secret);
  res.json({
    token,
    msg: "You signed in",
  });
});

app.get("/notes", authMiddleware, (req, res) => {
    const username = req.userId;
  const userNote = notes.filter((n) => n.username === username);
  res.json({ notes: userNote });
});

app.post("/notes", authMiddleware, (req, res) => {
  let username = req.userId;
  let note = req.body.note;
  notes.push({
    username: username,
    note: note,
  });
  res.json({
    msg: "Done",
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./frontend/index.html"));
});
app.get("/signup", (req, res) => {
  res.sendFile(path.resolve("./frontend/signup.html"));
});
app.get("/signin", (req, res) => {
  res.sendFile(path.resolve("./frontend/signin.html"));
});
// app.use(express.static("frontend"));
app.listen(3000);
