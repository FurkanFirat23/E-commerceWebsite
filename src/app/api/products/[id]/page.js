"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductPage({ params }) {
  const { id } = params; // URL'den ID'yi al
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-4">Price: ${product.price}</p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Add to Cart
      </button>
    </div>
  );
}
