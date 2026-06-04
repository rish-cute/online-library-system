// React hooks
import { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../redux/booksSlice";

// Navigation
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const books = useSelector(
    (state) => state.books.books
  );

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author is required";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
    }

    if (!formData.description.trim()) {
      newErrors.description =
        "Description is required";
    }

    if (
      !formData.rating ||
      formData.rating < 1 ||
      formData.rating > 5
    ) {
      newErrors.rating =
        "Rating must be between 1 and 5";
    }

    return newErrors;
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors =
      validateForm();

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);
      return;
    }

    const newBook = {
      id: books.length + 1,
      ...formData,
      image: "",
    };

    dispatch(addBook(newBook));

    navigate("/books");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">

      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-6">
          Add New Book
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>
            <input
              type="text"
              name="title"
              placeholder="Book Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={formData.author}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            {errors.author && (
              <p className="text-red-500 text-sm mt-1">
                {errors.author}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            {errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category}
              </p>
            )}
          </div>

          <div>
            <textarea
              name="description"
              placeholder="Description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description}
              </p>
            )}
          </div>

          <div>
            <input
              type="number"
              name="rating"
              placeholder="Rating (1-5)"
              value={formData.rating}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            {errors.rating && (
              <p className="text-red-500 text-sm mt-1">
                {errors.rating}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
          >
            Add Book
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddBook;