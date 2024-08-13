"use client";

import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function HomePage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-4 transition-colors duration-300 ${
        theme === "light" ? "bg-gray-50 text-black" : "bg-black text-white"
      }`}
    >
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Our E-Commerce Platform
      </h1>
      <p className="text-lg mb-8">Find the best products for your needs.</p>
      <Link href="/products">
        <a
          className={`px-6 py-3 rounded transition ${
            theme === "light"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-white text-black hover:bg-gray-300"
          }`}
        >
          Shop Now
        </a>
      </Link>
    </div>
  );
}
