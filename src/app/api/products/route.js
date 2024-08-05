import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET() {
  await dbConnect();

  try {
    const products = await Product.find({});
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response("Error fetching products", { status: 500 });
  }
}

export async function POST(req) {
  await dbConnect();

  try {
    const productData = await req.json();
    const product = new Product(productData);
    await product.save();
    return new Response(JSON.stringify(product), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return new Response("Error creating product", { status: 500 });
  }
}
