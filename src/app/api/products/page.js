"use client";

import { useEffect, useState } from "react";

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold mb-4">Products</h1>
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
          </div>
        ))}
      </div>
    </div>
  );
}
