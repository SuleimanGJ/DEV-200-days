import jwt from "jsonwebtoken";
import { JWT_ADMIN_SECRET } from "../db/config.js";

const adminAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    try {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, JWT_ADMIN_SECRET);
        if (!decoded.id) {
            req.adminId = decoded.id;
            next()
        }
        res.json({ message: "Unauthorizated token" })
    } catch (error) {
        return res.json({ message: "Invalid token" })
    }
}

export default adminAuth;