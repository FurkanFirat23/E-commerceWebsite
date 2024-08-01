import { connectToDatabase } from "../../../lib/mongodb";

export async function GET() {
  const db = await connectToDatabase();
  const collection = db.collection("orders");
  const orders = await collection.find({}).toArray();
  return new Response(JSON.stringify(orders), { status: 200 });
}

export async function POST(request) {
  const db = await connectToDatabase();
  const collection = db.collection("orders");
  const order = await request.json();
  const result = await collection.insertOne(order);
  return new Response(JSON.stringify(result.ops[0]), { status: 201 });
}
