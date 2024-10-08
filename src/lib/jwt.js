import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "your-secret-key";

export function signToken(payload) {
  return jwt.sign(payload, secret, { expiresIn: "1h" });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}
