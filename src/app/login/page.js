"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Giriş işlemi yapılabilir
    router.push("/dashboard"); // Örneğin, kullanıcıyı yönlendirme
  };

  const goToHome = () => {
    router.push("/"); // Ana sayfaya yönlendirme
  };

  return (
    <div className="relative">
      {/* Ana Sayfaya Dön Butonu */}
      <button
        onClick={goToHome}
        className="absolute top-4 left-4 px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600"
      >
        Ana Sayfaya Dön
      </button>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl mb-4">Giriş Yap</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta"
            className="px-4 py-2 border rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}
