import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";

export async function DELETE(req, { params }) {
  await dbConnect();
  const { id } = params;

  try {
    await Product.findByIdAndDelete(id);
    return new Response("Product deleted", { status: 200 });
  } catch (error) {
    console.error("Error deleting product:", error);
    return new Response("Error deleting product", { status: 500 });
  }
}
