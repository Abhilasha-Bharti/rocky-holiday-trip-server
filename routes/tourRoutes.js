import express from "express";
import Tour from "../models/tour.js";

const router = express.Router();

// GET all tours
router.get("/", async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new tour
router.post("/", async (req, res) => {
  const { name, location, price, description } = req.body;
  const newTour = new Tour({ name, location, price, description });

  try {
    const savedTour = await newTour.save();
    res.status(201).json(savedTour);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;