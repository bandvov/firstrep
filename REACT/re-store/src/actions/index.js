const bookLoaded = newBook => {
  return {
    type: "BOOKS_LOADED",
    payload: newBook
  };
};
export default bookLoaded;
