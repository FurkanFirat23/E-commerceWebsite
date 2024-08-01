"use client";
import { useState } from "react";

export default function AdminProducts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = async () => {
    await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price }),
    });
  };

  return (
    <div>
      <h1>Admin Panel - Products</h1>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}
