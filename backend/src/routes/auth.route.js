import express from "express";
import { getCurrentUser, login,  logout,  signup } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);

router.get('/me',protect,getCurrentUser)

export default router;

