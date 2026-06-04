import { createSlice } from "@reduxjs/toolkit";
import booksData from "../data/booksData";

// Initial state
const initialState = {
  books: booksData,
};

const booksSlice = createSlice({
  name: "books",
  initialState,

  reducers: {
    // Add new book
    addBook: (state, action) => {
      state.books.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;