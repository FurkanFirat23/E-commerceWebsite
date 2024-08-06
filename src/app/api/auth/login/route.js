import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { signToken } from "@/lib/jwt";

export async function POST(req) {
  await dbConnect();

  const { email, password } = await req.json();

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
      });
    }

    const token = signToken({ id: user._id, username: user.username });

    return new Response(JSON.stringify({ token, username: user.username }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    return new Response(JSON.stringify({ error: "Error logging in user" }), {
      status: 500,
    });
  }
}
