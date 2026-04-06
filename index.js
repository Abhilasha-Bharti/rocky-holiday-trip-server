import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import destinationsRoutes from "./routes/destinationRoutes.js";
import kashmirPlaceRoutes from "./routes/kashmirPlaceRoutes.js";
import callLeadRoutes from "./routes/callLeadRoutes.js";

dotenv.config();

const app = express();

// ✅ CORS MUST be before routes
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/kashmirPlaces", kashmirPlaceRoutes);
app.use("/api/leads", callLeadRoutes);
app.use("/api/destinations", destinationsRoutes);

app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);
  res.status(500).json({ message: err.message });
});

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