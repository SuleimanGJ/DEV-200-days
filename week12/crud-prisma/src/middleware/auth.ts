import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";
import "dotenv/config"


const auth = async (req: Request, res: Response, next: NextFunction) => {
    const JWT_SECRET: string | undefined = process.env.JWT_SECRET;
    
    if (!JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }
    const authHeader = req.headers.authorization;

    try {
        const token = authHeader?.split(" ")[1];
        if(!token){
            res.status(401).json({message: "Unauthorized"});
            return;
        }
        const payload = jwt.verify(token, JWT_SECRET);
        console.log(payload);
        if (typeof payload === "string" || !("id" in payload)) {
            return res.status(401).json({
                message: "Invalid token"
            });
        }
        req.userId = payload.id as number;
        next();
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Invalid or expired token"});
    }
}

export { auth };