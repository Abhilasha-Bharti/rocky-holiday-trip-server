import mongoose from "mongoose";

const KashmirplaceSchema = new mongoose.Schema(
  {
    name: 
    { 
        type: String, 
        required: true 
    },
    // top, offbeat
    type: 
    { 
        type: String, 
        required: true 
    }, 
    price: 
    { 
        type: Number, 
        required: true 
    },

    image: String,
    desc: String,
    location: 
    { type: String, 
        default: "Kashmir" 
    },
  },
  { timestamps: true }
);

export default mongoose.model("Place", KashmirplaceSchema);