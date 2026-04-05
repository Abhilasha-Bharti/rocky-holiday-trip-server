import mongoose from "mongoose";

const callLeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    place: { type: String, required: true },
    status: { type: String, default: "new" },
  },
  { timestamps: true }
);

export default mongoose.model("Lead", callLeadSchema);