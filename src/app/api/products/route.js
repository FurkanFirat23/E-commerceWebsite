import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(request) {
  try {
    await dbConnect();

    const products = await Product.find({});

    return new Response(JSON.stringify(products), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response("Error fetching products", { status: 500 });
  }
}
