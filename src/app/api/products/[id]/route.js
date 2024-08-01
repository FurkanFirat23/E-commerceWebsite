import clientPromise from "@/lib/mongodb";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const client = await clientPromise;
    const db = client.db();
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });

    if (!product) {
      return new Response("Product not found", { status: 404 });
    }

    return new Response(JSON.stringify(product), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error fetching product", { status: 500 });
  }
}
