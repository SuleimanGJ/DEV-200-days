

import jwt from "jsonwebtoken";  // access key (stateless) and refresh key (stateful)
let secret = "iloveyou";
export function authMiddleware(req, res, next){
      let userToken = req.headers.token;
      if (!userToken) {
        return res.status(403).json({
          msg: "You are not signed in",
        });
      }
  try {
    const decoded = jwt.verify(userToken, secret);
    req.userId = decoded.username;
    next();
  } catch (err) {
    return res.status(401).json({
      msg: "Invalid token",
    });
  }
}



//   let userToken = req.headers.token;
//   if (!userToken) {
//     res.status(403).json({
//       msg: "You are not signed in",
//     });
//   }
//   const decoded = jwt.verify(userToken, secret);
//   const username = decoded.username;

//   if (!username) {
//     res.json({
//       msg: "error with the token",
//     });
//     return;
//   }