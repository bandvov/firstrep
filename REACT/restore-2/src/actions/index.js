const booksLoaded = newBook => {
  return {
    type: "FETCH_BOOKS_LOADED",
    payload: newBook
  };
};
const bookAddedToCart = bookId => {
  return {
    type: "FETCH_BOOK_ADDED_TO_CART",
    payload: bookId
  };
};
const bookRemovedFromCart = bookId => {
  return {
    type: "FETCH_REMOVE_ALL_BOOKS_FROM_CART",
    payload: bookId
  };
};
const bookRemoveFromCart = bookId => {
  return {
    type: "FETCH_REMOVE_BOOK_FROM_CART",
    payload: bookId
  };
};

const booksRequested = ()=>{
  return {
    type:'FETCH_BOOKS_REQUESTED'
  }
}
export {
  booksLoaded,
  bookAddedToCart,
  bookRemovedFromCart,
  bookRemoveFromCart,
  booksRequested
};
