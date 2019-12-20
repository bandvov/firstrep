const booksLoaded = newBook => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBook
  };
};
const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST"
  };
};
const booksError = (error)=>{
  return{
    type:"FETCH_BOOKS_FAILURE",
    payload:error
  }
}
// all this action creators are used only in  fetchBooks() function and there is no need to export them
const fetchBooks=(bookStoreService,dispatch)=> () => {
  dispatch(booksRequested())
  bookStoreService
    .getBook()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)));
}

export { fetchBooks };
