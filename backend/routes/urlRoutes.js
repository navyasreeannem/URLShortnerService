import express from "express";
import { shortenUrl } from "../controllers/urlController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// API to shorten (PROTECTED)
router.post("/shorten", protect, shortenUrl);

export default router;
