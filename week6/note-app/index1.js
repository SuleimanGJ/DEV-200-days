import express from "express";
import jwt from "jsonwebtoken";
const app = express();

app.use(express.json());

let users = [{
    username: "Suleiman",
    password: 123123
}];

app.get("/", (req, res) => {
    res.send("App is working")
})


// singup
app.post("/singup", (req, res) => {
    const {username, password} = req.body;
    const userExits = users.find(u => u.username === username && u.password === password);
    
    if(userExits){
        return res.status(401).json({
            msg: "User with this username & password exists"
        })
    }
    users.push({
      username,
      password,
    });
    res.json({
      msg: "You signed up",
      user: {
        username,
        password,
      },
    });
})


// singin
app.post("/singin", (req, res) => {
    const {username, password} = req.body;
    const userExits = users.find(u => u.username === username);
    console.log(userExits)
    if(!userExits){
        return res.status(401).json({
            msg: "Invalid credential"
        })
    }
    
    const token = jwt.sign({username}, "iloveyou1")
    
    res.json({
    token: token,
    msg: "You are signed in",
    });
})


app.get("/users", (req, res) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    const token = authHeader.split(" ")[1];
    console.log(token)
    const decoded = jwt.verify(token, "iloveyou1")
    console.log(decoded)
    console.log(decoded.username)
    if (!decoded.username) {
      return res.json({
        msg: "Invalid token",
      });
    }

    for(let i=0; i<= users.length; i++){
        res.json({
            username:users[i].username, password:users[i].password
        })
    }
})

app.listen(3001, () => {
    console.log("Server is running on port 3001 - http://localhost:3001")
})