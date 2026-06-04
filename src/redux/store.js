import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";

// Redux store configuration
export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});