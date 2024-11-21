// src/app/api/auth/forgot-password/route.js
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  await dbConnect();

  const { email } = await req.json();

  if (!email) {
    return new Response(JSON.stringify({ error: "Email is required" }), {
      status: 400,
    });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
    });
  }

  // Şifre sıfırlama bağlantısı gönderme işlemi (örnek)
  console.log(`Password reset link sent to: ${email}`);

  return new Response(JSON.stringify({ message: "Password reset link sent" }), {
    status: 200,
  });
}
