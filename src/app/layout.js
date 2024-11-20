// src/app/layout.js

"use client"; // Client component olarak işaretledik

import { useEffect, useState } from "react";
import Link from "next/link";
import { getServerSideData } from "./ServerSideData";
import "../app/styles/globals.css";

export default function Layout({ children }) {
  const [username, setUsername] = useState(null);

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

  return (
    <html lang="en">
      <body>
        <div>
          <header className="bg-blue-800 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
              <h1 className="text-2xl font-bold">E-Commerce</h1>
              <nav className="space-x-4">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <Link href="/products" className="hover:underline">
                  Products
                </Link>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
                {username ? (
                  <>
                    <span className="hover:underline">{username}</span>
                    <button onClick={handleLogout} className="hover:underline">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="hover:underline">
                      Login
                    </Link>
                    <Link href="/register" className="hover:underline">
                      Register
                    </Link>
                  </>
                )}
              </nav>
            </div>
          </header>
          <main className="container mx-auto p-4">{children}</main>
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
