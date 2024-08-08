export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our E-Commerce platform! We are dedicated to providing the
          best products and services to meet your needs.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to offer a wide range of quality products at
          competitive prices. Whether you're looking for the latest in
          technology, fashion, or home goods, we've got you covered.
        </p>
        <p className="text-lg text-gray-700">
          Thank you for choosing us as your preferred shopping destination. We
          are committed to providing you with an exceptional shopping
          experience.
        </p>
      </div>
    </div>
  );
}
