import Place from "../models/kashmirPlace.model.js";

// ✅ GET ALL PLACES (Browser me check ho jayega)
export const getPlaces = async (req, res) => {
  try {
    const { type, maxPrice } = req.query;

    let query = {};

    if (type) query.type = type;
    if (maxPrice) query.price = { $lte: Number(maxPrice) };

    const places = await Place.find(query);

    res.status(200).json({
      success: true,
      count: places.length,
      data: places,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ ADD PLACE (No seed required)
export const createPlace = async (req, res) => {
  try {
    const place = await Place.create(req.body);

    res.status(201).json({
      success: true,
      data: place,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};