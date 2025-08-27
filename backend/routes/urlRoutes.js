import express from "express";
import { shortenUrl } from "../controllers/urlController.js";

const router = express.Router();

// API to shorten
router.post("/shorten", shortenUrl);

// No redirect route needed for Bitly

export default router;
