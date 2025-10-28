import Header from './components/Header';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-600">404</h1>
          <p className="mt-4 text-xl text-gray-700">Page Not Found</p>
          <p className="mt-2 text-gray-500">
            <a href="/" className="text-amber-700 hover:underline">
              ← Back to Home
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}