import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  imageUrl: { type: String },
  stock: { type: Number, default: 0 },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
