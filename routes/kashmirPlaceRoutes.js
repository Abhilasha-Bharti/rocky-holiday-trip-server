import express from "express";
import {
  getPlaces,
  createPlace,
} from "../controllers/kashmirPlaceController.js";

const router = express.Router();
router.get("/test", (req, res) => {
  res.send("Route working");
});
router.get("/", getPlaces);        // Browser test
router.post("/", createPlace);     // Add place

export default router;