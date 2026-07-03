import e from 'express';
import { login, register } from '../controllers/authController.js';
const router = e.Router();

router.post("/signup", register);
router.post("/signin", login);

export default router;