// Importing navigation links
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-indigo-600">
            📚 Online Library
          </h1>

          {/* Navigation Links */}
          <div className="flex gap-6">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-700 hover:text-indigo-600"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-700 hover:text-indigo-600"
              }
            >
              Browse Books
            </NavLink>

            <NavLink
              to="/add-book"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-700 hover:text-indigo-600"
              }
            >
              Add Book
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;