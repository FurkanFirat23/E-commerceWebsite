import React from "react";
import "../app/styles/globals.css";

export const metadata = {
  title: "E-Commerce Application",
  description: "A description of my e-commerce application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-blue-800 text-white py-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold">E-Commerce</h1>
            <nav className="space-x-4">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/products" className="hover:underline">
                Products
              </a>
              <a href="/about" className="hover:underline">
                About
              </a>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p>
              &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
