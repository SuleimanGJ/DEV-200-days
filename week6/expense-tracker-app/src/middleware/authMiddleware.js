import jwt from "jsonwebtoken";
const SECRET = process.env.SECRET || "yoursupersecret0";

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, SECRET);
        req.userId = decoded.id;
        next()
    } catch (error) {
        res.status(403).json({message: "Invalid Token"})
    }
}

export default authMiddleware