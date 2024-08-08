"use client";

import { UserProvider, useUser } from "@/context/UserContext";
import Link from "next/link";
import "../app/styles/globals.css";

function Header() {
  const { user, logout } = useUser();

  return (
    <header className="bg-blue-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">E-Commerce</h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {user ? (
            <>
              <span>{user.username}</span>
              <button onClick={logout} className="hover:underline">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
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
      <html lang="en">
        <body className="bg-gray-100 text-gray-900">
          <Header />
          <main className="container mx-auto p-4">{children}</main>
          <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
              <p>
                &copy; {new Date().getFullYear()} E-Commerce. All rights
                reserved.
              </p>
            </div>
          </footer>
        </body>
      </html>
    </UserProvider>
  );
}
