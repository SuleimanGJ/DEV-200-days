import jwt from "jsonwebtoken";
const SECRET = process.env.SECRET || "yoursecret0";

const authenticateJwt = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send("No token provided"); 
        // return res.status(401).send("Unauthorized: no token"); 
    }
    const token = authHeader.split(" ")[1];

    jwt.verify(token, SECRET, (err, user) => {
        if(err){
            return res.status(403).json({message: "Forbidden: Invalid token"})
        }
        req.userId = user.userId;
        next()
    })

    // try {
    //   const decoded = jwt.verify(token, SECRET);
    //   req.userId = decoded.userId;
    //   next();
    // } catch (err) {
    //   return res.status(403).json({
    //     message: "Invalid token",
    //   });
    // }
    
} 

export {
  authenticateJwt,
  SECRET,
};