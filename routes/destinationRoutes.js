import express from "express";
import Destination from "../models/destinations.model.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    // ✅ AUTO CREATE SLUG
    const slug =
      name.toLowerCase().replace(/\s+/g, "-") +
      "-" +
      Date.now();

    const data = await Destination.create({
      name,
      slug,
    });

    res.status(201).json(data);

  } catch (error) {
    console.error("❌ ERROR:", error.message);

    res.status(500).json({
      message: error.message,
    });
  }
});

// GET ALL (Navbar)


router.get("/", async (req, res) => {
  try {
    const data = await Destination.find(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const { name } = req.body;

    const slug =
      name.toLowerCase().replace(/\s+/g, "-") +
      "-" +
      Date.now();

    const data = await Destination.findByIdAndUpdate(
      req.params.id,
      { name, slug },
      { new: true }
    );

    res.json(data);

  } catch (error) {
    console.error("❌ UPDATE ERROR:", error.message);
    res.status(500).json({ message: error.message });
  }
});

//DELETE
router.delete("/", async (req, res) => {
  try {
    const data = await Destination.findByIdAndDelete(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});
export default router;