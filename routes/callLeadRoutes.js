import express from "express";
import { createLead } from "../controllers/callLeadController.js";

const router = express.Router();

router.post("/", createLead);

export default router;