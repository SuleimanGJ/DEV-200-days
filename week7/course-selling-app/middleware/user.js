import jwt from "jsonwebtoken";

const SECRET = "supersecret0";

const adminAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    try {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, SECRET);
        if(!decoded.id){
            req.adminId = decoded.id;
            next()
        }
        res.json({message: "Unauthorizated token"})
    } catch (error) {
        return res.json({ message: "Invalid token" })
    }
}

export default adminAuth;