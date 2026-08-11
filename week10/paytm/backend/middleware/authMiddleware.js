import { JWT_SECRET } from "../config.js";
import jwt from "jsonwebtoken";


const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    try {
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(403).json({});
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        if(decoded.userId){
            req.userId = decoded.userId;
            next();
        }
    } catch (error) {
        console.error(error)
        return res.status(403).json({});
    }
};

export { authMiddleware };