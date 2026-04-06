import express from "express";
import Destination from "../models/destinations.model.js";

const router = express.Router();

// ✅ CREATE
router.post("/", async (req, res) => {
  try {
    console.log("📦 BODY:", req.body);

    const { name, image } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const slug = name.toLowerCase().replace(/\s+/g, "-");

    const data = await Destination.create({
      name,
      slug,
      image,
    });

    res.status(201).json(data);

  } catch (error) {
    console.error("❌ ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// ✅ GET ALL (Navbar)
// router.get("/", async (req, res) => {
//   const data = await Destination.find();
//   res.json(data);
// });

router.get("/", async (req, res) => {
  try {
    const data = await Destination.find(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// ✅ UPDATE
// router.put("/:id", async (req, res) => {
//   const data = await Destination.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true }
//   );
//   res.json(data);
// });

router.put("/", async (req, res) => {
  try {
    const data = await Destination.findByIdAndUpdate(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// ✅ DELETE
// router.delete("/:id", async (req, res) => {
//   await Destination.findByIdAndDelete(req.params.id);
//   res.json({ message: "Deleted" });
// });

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