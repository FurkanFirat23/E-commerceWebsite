import { connectToDatabase } from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET({ params }) {
  const db = await connectToDatabase();
  const collection = db.collection("products");
  const product = await collection.findOne({ _id: new ObjectId(params.id) });
  return new Response(JSON.stringify(product), { status: 200 });
}

export async function PUT({ params, request }) {
  const db = await connectToDatabase();
  const collection = db.collection("products");
  const update = await request.json();
  await collection.updateOne(
    { _id: new ObjectId(params.id) },
    { $set: update }
  );
  return new Response(JSON.stringify({ message: "Product updated" }), {
    status: 200,
  });
}

export async function DELETE({ params }) {
  const db = await connectToDatabase();
  const collection = db.collection("products");
  await collection.deleteOne({ _id: new ObjectId(params.id) });
  return new Response(JSON.stringify({ message: "Product deleted" }), {
    status: 200,
  });
}
