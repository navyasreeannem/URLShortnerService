import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import urlRoutes from "./routes/urlRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

// Serve frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "..", "frontend")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

// API Routes
app.use("/api", urlRoutes);   // ⚠️ best practice: prefix with /api

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
