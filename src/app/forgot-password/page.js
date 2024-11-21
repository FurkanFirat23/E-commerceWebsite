"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) {
      setError("Lütfen e-posta adresinizi girin.");
      return;
    }

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("Şifre sıfırlama bağlantısı e-postanıza gönderildi.");
      } else {
        const data = await res.json();
        setError(data.error || "Şifre sıfırlama işlemi başarısız oldu.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-4">Şifre Sıfırla</h1>
      {error && <p className="text-red-500">{error}</p>}
      {message && <p className="text-green-500">{message}</p>}
      <form onSubmit={handleForgotPassword} className="w-full max-w-sm">
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
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Şifre Sıfırlamak İçin Tıklayın
        </button>
      </form>
    </div>
  );
}
