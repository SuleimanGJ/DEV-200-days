import jwt from "jsonwebtoken";
const SECRET = process.env.SECRET || "ilovecoding"

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.json({ message: "Invalid input" });
  }
  const token = authHeader.split(" ")[1];
  
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.json({ message: "Forbiden/Invalid Token" });
  }

  // jwt.verify(token, SECRET, (err, user) => {
  //   if (err) {
  //     res.json({ message: "Forbiden Toekn" });
  //   }
  //   req.userId = user;
  //   next();
  // });
}


export default auth;