"use client";

import { useUser } from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";

export default function ClientRootLayout({ children }) {
  const { user, logout } = useUser();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`theme-${theme}`}>
      <header className="bg-blue-800 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">E-Commerce</h1>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            {isAuthenticated && (
              <Link href="/products/new" className="button-styling">
                Add New Product
              </Link>
            )}

            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            {user ? (
              <>
                <span className="hover:underline">{user.username}</span>
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
      <main className="container mx-auto p-4">{children}</main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
