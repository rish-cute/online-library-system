// Importing router hooks
import { useParams, Link } from "react-router-dom";

// Importing books data
import { useSelector } from "react-redux";

function BookDetails() {
  // Getting book ID from URL
  const { id } = useParams();

  // Getting books from Redux store
const books = useSelector(
  (state) => state.books.books
);

// Finding selected book
const book = books.find(
  (book) => book.id === Number(id)
);

  // Handling invalid IDs
  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Book Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10">

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

        {/* Book Image */}
        <div className="flex justify-center bg-slate-100 p-6">

          <img
            src={book.image ||
              "https://placehold.co/300x450?text=Book+Cover"}
            alt={book.title}
            className="h-96 object-contain"
          />

        </div>

        {/* Book Details */}
        <div className="p-8">

          <h1 className="text-4xl font-bold mb-4">
            {book.title}
          </h1>

          <p className="text-lg text-gray-600 mb-3">
            Author: {book.author}
          </p>

          <p className="text-indigo-600 font-semibold mb-3">
            Category: {book.category}
          </p>

          <p className="text-yellow-500 text-lg mb-5">
            ⭐ {book.rating}
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            Description
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            {book.description}
          </p>

          {/* Back Button */}
          <Link
            to="/books"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Back to Browse Books
          </Link>

        </div>

      </div>

    </div>
  );
}

export default BookDetails;

