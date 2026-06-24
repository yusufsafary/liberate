import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <div className="text-8xl font-black text-gray-100 mb-4 select-none">404</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-3">Page not found</h1>
      <p className="text-gray-500 max-w-sm mb-8">
        The page you are looking for does not exist or may have been moved. Head back home and try again.
      </p>
      <Link
        to="/"
        className="bg-black text-white hover:bg-gray-800 px-8 py-3.5 rounded-full text-sm font-semibold transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
