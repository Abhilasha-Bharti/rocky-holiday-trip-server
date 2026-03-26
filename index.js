import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import destinationsRoute from "./routes/destinationRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/destinations", destinationsRoute);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ DB Error:", err));

// Dynamic port for Render
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));