import express from "express";
import Destination from "../models/destinations.model.js";

const router = express.Router();

// GET /api/destinations
router.get("/", async (req, res) => {
  try {
    const destinations = await Destination.find(); // fetch all from MongoDB
    res.json(destinations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/destinations/:slug
router.get("/:slug", async (req, res) => {
  try {
    const destination = await Destination.findOne({ slug: req.params.slug });
    if (!destination) return res.status(404).json({ message: "Destination not found" });
    res.json(destination);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;