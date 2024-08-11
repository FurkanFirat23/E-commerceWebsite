"use client";

import { UserProvider, useUser } from "@/context/UserContext";
import { ThemeProvider, ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext } from "react";
import "../app/styles/globals.css";

function Header() {
  const { user, logout } = useUser();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-white text-black py-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">E-Commerce</h1>
        <nav className="space-x-4 flex items-center">
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

          {/* Gece/Gündüz Modu Düğmesi */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-800 text-gray-100 rounded-md hover:bg-gray-600 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300 transition"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {user ? (
            <>
              <span>{user.username}</span>
              <button onClick={logout} className="hover:underline">
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
  );
}

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <ThemeProvider>
        <html lang="en">
          <body className="bg-white text-black dark:bg-gray-900 dark:text-gray-100">
            <Header />
            <main className="container mx-auto p-4">{children}</main>
            <footer className="bg-gray-800 text-gray-100 py-4 dark:bg-gray-200 dark:text-gray-900">
              <div className="container mx-auto text-center">
                <p>
                  &copy; {new Date().getFullYear()} E-Commerce. All rights
                  reserved.
                </p>
              </div>
            </footer>
          </body>
        </html>
      </ThemeProvider>
    </UserProvider>
  );
}
