import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
});

const Tour = mongoose.model("Tour", tourSchema);

export default Tour;