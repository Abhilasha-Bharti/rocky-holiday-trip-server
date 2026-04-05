import express from "express";
import Destination from "../models/Destination.js";

const router = express.Router();

// ✅ CREATE
router.post("/", async (req, res) => {
  const data = await Destination.create(req.body);
  res.json(data);
});

// ✅ GET ALL (Navbar)
router.get("/", async (req, res) => {
  const data = await Destination.find();
  res.json(data);
});

// ✅ UPDATE
router.put("/:id", async (req, res) => {
  const data = await Destination.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
});

// ✅ DELETE
router.delete("/:id", async (req, res) => {
  await Destination.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;