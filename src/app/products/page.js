"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]); // Ürünleri tutmak için state oluşturulur.
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Kullanıcının giriş yapıp yapmadığını kontrol etmek için state.

  useEffect(() => {
    // Kullanıcının giriş yapıp yapmadığını kontrol et.
    const token = localStorage.getItem("token"); // Tarayıcıdaki token kontrol edilir.
    if (token) {
      setIsAuthenticated(true); // Token varsa kullanıcı giriş yapmış kabul edilir.
    }

    // Ürünleri API'den al.
    async function fetchProducts() {
      const res = await fetch("/api/products"); // API'den ürün verileri çekilir.
      const data = await res.json();
      setProducts(data); // Ürünler state'e eklenir.
    }

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    // Ürün silme işlemi.
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE", // HTTP DELETE metodu ile silme talebi gönderilir.
    });

    if (res.ok) {
      setProducts(products.filter((product) => product._id !== id)); // Silinen ürün, ürün listesinden çıkarılır.
    } else {
      console.error("Failed to delete product"); // Silme işlemi başarısız olursa hata mesajı gösterilir.
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold mb-4">Products</h1>

      {/* Kullanıcı giriş yaptıysa "Add New Product" butonu gösterilir */}
      {isAuthenticated && (
        <Link
          href="/products/new"
          className="mb-4 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded shadow-md hover:bg-blue-700 transition"
        >
          Add New Product
        </Link>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded">
            {/* Ürün resmini ve bilgilerini göster */}
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-lg">{product.description}</p>
            <p className="text-xl font-bold">${product.price}</p>
            <button
              onClick={() => handleDelete(product._id)} // Ürün silme fonksiyonu.
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
