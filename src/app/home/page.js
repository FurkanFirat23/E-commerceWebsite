"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Our E-Commerce Platform
      </h1>
      <p className="text-lg mb-8">Find the best products for your needs.</p>
      <Link href="/products">
        <a className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Shop Now
        </a>
      </Link>
    </div>
  );
}
