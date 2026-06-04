// Importing hooks
import { useState } from "react";

// Importing router utilities
import { useParams, Link } from "react-router-dom";

// Importing books data
import { useSelector } from "react-redux";

function BrowseBooks() {
  // Getting category from URL
  const { category } = useParams();

  // Search input state
  const [searchTerm, setSearchTerm] = useState("");

  // Getting books from Redux store
const books = useSelector(
  (state) => state.books.books
);

// Filter books by category if category exists
const categoryBooks = category
  ? books.filter(
      (book) =>
        book.category.toLowerCase() ===
        category.toLowerCase()
    )
  : books;
    

  // Filter books by search term
  const filteredBooks = categoryBooks.filter(
    (book) =>
      book.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      book.author
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Page Header */}
      <div className="bg-indigo-600 text-white py-12">

        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-4">
            {category
              ? `${category} Books`
              : "Browse Books"}
          </h1>

          <p>
            Explore our growing library collection.
          </p>

        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">

        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

      </div>

      {/* Books Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">

        {filteredBooks.length === 0 ? (
          <div className="text-center py-10">

            <h2 className="text-2xl font-semibold">
              No Books Found
            </h2>

            <p className="text-gray-600 mt-2">
              Try a different search term.
            </p>

          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >

                <img
                  src={book.image ||
                    "https://placehold.co/300x450?text=Book+Cover"}
                  alt={book.title}
                  className="h-80 w-full object-contain bg-white"
                />

                <div className="p-4">

                  <h3 className="font-bold text-lg mb-2">
                    {book.title}
                  </h3>

                  <p className="text-gray-600 mb-2">
                    {book.author}
                  </p>

                  <p className="text-sm text-indigo-600 mb-2">
                    {book.category}
                  </p>

                  <p className="text-yellow-500 mb-4">
                    ⭐ {book.rating}
                  </p>

                  <Link
                    to={`/book/${book.id}`}
                    className="text-indigo-600 font-semibold"
                  >
                    View Details →
                  </Link>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default BrowseBooks;


