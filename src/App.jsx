// Importing routing components
import { Routes, Route } from "react-router-dom";

// Importing pages
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* Application Routes */}
      <Routes>

        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Browse books page */}
        <Route path="/books" element={<BrowseBooks />} />

        {/* Dynamic category route */}
        <Route path="/books/:category" element={<BrowseBooks />} />

        {/* Dynamic book details route */}
        <Route path="/book/:id" element={<BookDetails />} />

        {/* Add book page */}
        <Route path="/add-book" element={<AddBook />} />

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;