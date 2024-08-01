import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Ana Sayfa</h1>
        <p className="text-lg mt-2">Hoş geldiniz!</p>
      </header>
      <main>
        <p className="text-center">
          <Link href="/login" className="text-blue-500 underline">
            Giriş Yap
          </Link>
        </p>
      </main>
    </div>
  );
}
