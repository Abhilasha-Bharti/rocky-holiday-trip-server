import Lead from "../models/callLead.js";

export const createLead = async (req, res) => {
  try {
    const { name, phone, place } = req.body;

    if (!name || !phone || !place) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    const lead = await Lead.create({ name, phone, place });

    res.status(201).json({
      success: true,
      data: lead,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};