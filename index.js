import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import destinationsRoutes from "./routes/destinationRoutes.js";
import kashmirPlaceRoutes from "./routes/kashmirPlaceRoutes.js";
import callLeadRoutes from "./routes/callLeadRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

// ROUTES
app.use("/api/kashmirPlaces", kashmirPlaceRoutes);
app.use("/api/leads", callLeadRoutes);
app.use("/api/destinations", destinationsRoutes);

app.get("/", (req, res) => {
  res.send("API is running!");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(" DB Error:", err));

// Dynamic port for Render
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));