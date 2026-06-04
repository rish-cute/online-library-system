// Importing router utilities
import { Link, useLocation } from "react-router-dom";

function NotFound() {
  // Getting invalid route URL
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">

      <div className="text-center">

        {/* Error Code */}
        <h1 className="text-8xl font-bold text-indigo-600 mb-4">
          404
        </h1>

        {/* Error Title */}
        <h2 className="text-3xl font-semibold mb-4">
          Page Not Found
        </h2>

        {/* Error Description */}
        <p className="text-gray-600 mb-4">
          The page you're looking for doesn't exist.
        </p>

        {/* Invalid URL Display */}
        <p className="text-red-500 font-medium mb-8">
          Invalid URL: {location.pathname}
        </p>

        {/* Back To Home Button */}
        <Link
          to="/"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Back To Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;