// Importing routing components
import { Routes, Route, useLocation } from "react-router-dom";

// Importing components
import Navbar from "./components/Navbar";

// Importing pages
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

function App() {

  // Getting current route
  const location = useLocation();

  // Hide navbar on 404 page
  const showNavbar = location.pathname !== "/random-page";

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/books" element={<BrowseBooks />} />

        <Route
          path="/books/:category"
          element={<BrowseBooks />}
        />

        <Route
          path="/book/:id"
          element={<BookDetails />}
        />

        <Route
          path="/add-book"
          element={<AddBook />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </>
  );
}

export default App;