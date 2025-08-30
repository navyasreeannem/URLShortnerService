// server.js
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import urlRoutes from "./routes/urlRoutes.js";
import authRoutes from "./routes/auth.js";
import connectDB from "./utils/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Serve frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "..", "frontend")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "login.html"));
});

// Routes
app.use("/api", urlRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
