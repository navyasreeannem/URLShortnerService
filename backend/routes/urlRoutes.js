import express from "express";
import { shortenUrl, redirectUrl } from "../controllers/urlController.js";

const router = express.Router();

// API to shorten
router.post("/shorten", shortenUrl);

// Redirect route
router.get("/:shortId", redirectUrl);

export default router;
