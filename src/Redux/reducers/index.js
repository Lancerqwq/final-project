import actionTypes from "../action-types";

const mapBooks = (books, id, item) => {
  return books.map((book) => {
    return book.id === id ? { ...book, ...item } : book;
  });
};

const initialState = {
  books: [],
  cart: [],
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOOKS: {
      const { updatedBooks } = action.payload;
      return {
        ...state,
        books: [...state.books, ...updatedBooks],
      };
    }
    case actionTypes.ADD_BOOK: {
      const { id } = action.payload;
      let addedBook = state.books.find((booksItem) => booksItem.id === id);
      addedBook = { ...addedBook, isAdded: true };

      return {
        ...state,
        books: [...mapBooks(state.books, id, addedBook)],
        cart: [...state.cart, addedBook],
      };
    }
    case actionTypes.REMOVE_BOOK: {
      const { id } = action.payload;
      const filteredCart = state.cart.filter((item) => item.id !== id);
      let addedBook = state.books.find((booksItem) => booksItem.id === id);
      addedBook = { ...addedBook, isAdded: false };

      return {
        ...state,
        books: [...mapBooks(state.books, id, addedBook)],
        cart: [...filteredCart],
      };
    }
    default:
      return state;
  }
};

export default books;
