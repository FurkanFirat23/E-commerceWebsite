function Header() {
  const { user, logout } = useUser();
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`py-4 shadow-md ${
        theme === "light" ? "bg-blue-800 text-white" : "bg-black text-white"
      }`}
    >
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
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        >
          {theme === "light" ? "🌞" : "🌜"}
        </button>
      </div>
    </header>
  );
}

export default function RootLayout({ children }) {
  const { theme } = useTheme();

  return (
    <UserProvider>
      <html lang="en">
        <body
          className={`transition-colors duration-300 ${
            theme === "light"
              ? "bg-gray-100 text-gray-900" // Gündüz modu için
              : "bg-black text-white" // Gece modu için
          }`}
        >
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
