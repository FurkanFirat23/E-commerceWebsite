"use client"; // Client component olarak işaretledik

import { useEffect, useState } from "react";
import Link from "next/link";
import { getServerSideData } from "./ServerSideData";
import "../app/styles/globals.css";

export default function Layout({ children }) {
  const [username, setUsername] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Burada server tarafı verisini alıyoruz
    const fetchData = async () => {
      const serverData = await getServerSideData(); // Server'dan veri alıyoruz
      setUsername(serverData.username); // Username state'ini güncelliyoruz
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUsername(null);
  };

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    try {
      const res = await fetch(`/api/search?q=${searchQuery}`);
      const data = await res.json();

      if (res.ok) {
        setSearchResults(data.products); // Arama sonuçlarını güncelliyoruz
      } else {
        console.error("Search API error:", data);
      }
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    <html lang="en">
      <body>
        <div>
          {/* Navbar */}
          <header className="bg-gray-100 shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              {/* Logo */}
              <div className="text-2xl font-bold text-blue-600">E-Commerce</div>

              {/* Arama Çubuğu */}
              <div className="hidden md:flex items-center w-1/3">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} // Arama sorgusunu güncelle
                  className="w-full px-4 py-2 border border-gray-300 rounded-l text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                />
                <button
                  onClick={handleSearch} // Arama fonksiyonu tetikleniyor
                  className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition"
                >
                  Search
                </button>
              </div>

              {/* Menü Öğeleri */}
              <div className="flex space-x-6 text-gray-700">
                <Link
                  href="/"
                  className="hover:text-blue-600 hover:underline transition"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="hover:text-blue-600 hover:underline transition"
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  className="hover:text-blue-600 hover:underline transition"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-blue-600 hover:underline transition"
                >
                  Contact
                </Link>
                {username ? (
                  <>
                    <span className="hover:text-blue-600">{username}</span>
                    <button
                      onClick={handleLogout}
                      className="hover:text-blue-600 hover:underline transition"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="hover:text-blue-600 hover:underline transition"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="hover:text-blue-600 hover:underline transition"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </header>

          {/* Arama Sonuçları */}
          {searchResults.length > 0 && (
            <div className="container mx-auto p-4 mt-6">
              <h2 className="text-xl font-semibold">Search Results</h2>
              <ul className="space-y-4">
                {searchResults.map((product) => (
                  <li key={product.id} className="border-b py-2">
                    <Link
                      href={`/products/${product.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ana İçerik */}
          <main className="container mx-auto p-4">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
              <p>
                &copy; {new Date().getFullYear()} E-Commerce. All rights
                reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
