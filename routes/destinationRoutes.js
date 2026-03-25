// server/routes/destinationRoutes.js
import express from "express";
const router = express.Router();

// Static destinations data (can later be fetched from DB)
const destinations = [
  { name: "Kashmir", slug: "kashmir" },
  { name: "Ladakh", slug: "ladakh" }
];

// GET /api/destinations
router.get("/", (req, res) => {
  res.json(destinations);
});

export default router;