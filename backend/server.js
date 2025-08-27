import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import urlRoutes from "./routes/urlRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Static frontend (paste HTML into /public)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", urlRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
