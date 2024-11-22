"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setProducts(products.filter((product) => product._id !== id));
    } else {
      console.error("Failed to delete product");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold mb-4">Products</h1>
      <Link
        href="/products/new"
        className="mb-4 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded shadow-md hover:bg-blue-700 transition"
      >
        Add New Product
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-lg">{product.description}</p>
            <p className="text-xl font-bold">${product.price}</p>
            <button
              onClick={() => handleDelete(product._id)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
