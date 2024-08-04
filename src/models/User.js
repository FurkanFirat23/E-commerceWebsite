import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  address: { type: String },
  role: { type: String, default: "customer" }, // "admin" veya "customer"
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
