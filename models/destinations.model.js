import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true, // VERY IMPORTANT
  },
  image: String,
}, { timestamps: true });

export default mongoose.model("Destination", destinationSchema);