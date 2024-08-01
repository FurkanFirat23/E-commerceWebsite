import { connectToDatabase } from "../../../lib/mongodb";

export async function GET() {
  const db = await connectToDatabase();
  const collection = db.collection("products");
  const products = await collection.find({}).toArray();
  return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(request) {
  const db = await connectToDatabase();
  const collection = db.collection("products");
  const product = await request.json();
  const result = await collection.insertOne(product);
  return new Response(JSON.stringify(result.ops[0]), { status: 201 });
}
