"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext"; // UserContext'inden useUser hook'unu içe aktardık

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // useUser hook'u ile login fonksiyonu alınıyor
  const userContext = useUser();

  // Eğer userContext undefined veya login fonksiyonu yoksa, login fonksiyonu null fallback ile set edilsin.
  const { login } = userContext || {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    // API'ye giriş isteği gönderiyoruz
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    // Eğer API yanıtı başarılıysa login fonksiyonunu çağırıyoruz
    if (res.ok) {
      if (login) {
        login(data.username); // Kullanıcıyı login et
        router.push("/"); // Ana sayfaya yönlendir
      } else {
        setError("Login fonksiyonu bulunamadı.");
      }
    } else {
      setError(data.error); // Hata mesajını set ediyoruz
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-500">{error}</p>}{" "}
      {/* Hata varsa göster */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 border border-gray-300 rounded w-full text-gray-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 border border-gray-300 rounded w-full text-gray-900"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
