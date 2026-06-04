// Importing navigation links
import { Link } from "react-router-dom";

// Importing books data
import booksData from "../data/booksData";

function Home() {

  // Categories displayed on homepage
  const categories = [
    "Fiction",
    "Self-Help",
    "Finance",
    "Science Fiction",
    "Biography",
  ];

  // Featured fiction books
  const featuredBooks = booksData.filter(
    (book) =>
      book.title === "The Deal" ||
      book.title === "Twisted Love" ||
      book.title === "Haunting Adeline" ||
      book.title === "The Spanish Love Deception"
  );

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Your Next Great Read
          </h1>

          <p className="text-lg md:text-xl text-indigo-100 mb-8">
            Explore books across Fiction, Finance,
            Self-Help, Biography, and Science Fiction.
          </p>

          <Link
            to="/books"
            className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-slate-100 transition"
          >
            Browse Collection
          </Link>

        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Browse Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

          {categories.map((category) => (
            <Link
              key={category}
              to={`/books/${category}`}
              className="bg-white shadow-md rounded-xl p-6 text-center font-semibold hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {category}
            </Link>
          ))}

        </div>
      </section>

      {/* Featured Books */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Fiction Collection
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >

              <img
                src={book.image}
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
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Why Readers Love Us
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div className="shadow-md rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Easy Search
              </h3>

              <p className="text-gray-600">
                Quickly find books by title or author.
              </p>
            </div>

            <div className="shadow-md rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Categories
              </h3>

              <p className="text-gray-600">
                Browse books by category effortlessly.
              </p>
            </div>

            <div className="shadow-md rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Detailed Information
              </h3>

              <p className="text-gray-600">
                Explore ratings, authors, and descriptions.
              </p>
            </div>

            <div className="shadow-md rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Add Your Books
              </h3>

              <p className="text-gray-600">
                Expand your collection with ease.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
