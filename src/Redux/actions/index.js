import actionTypes from "../action-types";

export const addBook = (id) => ({
  type: actionTypes.ADD_BOOK,
  payload: { id },
});

export const removeBook = (id) => ({
  type: actionTypes.REMOVE_BOOK,
  payload: { id },
});

export const fetchBooks = (updatedBooks) => ({
  type: actionTypes.FETCH_BOOKS,
  payload: { updatedBooks },
});

export const plusAmount = (id) => ({
  type: actionTypes.INCREMENT,
  payload: { id },
});

export const minusAmount = (id) => ({
  type: actionTypes.DECREMENT,
  payload: { id },
});

export const checkoutOrder = () => ({
  type: actionTypes.CHECKOUT,
});
