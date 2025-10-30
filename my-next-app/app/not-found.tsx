// app/not-found.tsx
import Header from './components/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header /> {/* No props needed */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-600">404</h1>
          <p className="text-xl text-gray-600 mt-4">Page not found</p>
        </div>
      </main>
    </div>
  );
}