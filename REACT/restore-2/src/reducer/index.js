let initialState = {
  books: [],
  cartItems: [],
  loading: false,
  orderTotal: null
};
const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    idx = book.idx,
    title = book.title,
    total = book.total,
    count = 0,
    price = book.price
  } = item;

  return {
    id,
    idx,
    title,
    price,
    count: count + quantity,
    total: total + quantity * book.price
  };
};

const updateCartItems = (cartItems, item, index) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
  }
  if (index === -1) {
    return [...cartItems, item];
  } else {
    return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)];
  }
};
const updateOrder = (state, action, quantity) => {
  const book = state.books.find(item => item.id === action.payload);
  const itemIdx = state.cartItems.findIndex(item => item.id === action.payload);
  const item = state.cartItems[itemIdx];

  const newItem = updateCartItem(book, item, quantity);
  return {
    ...state,
    cartItems: updateCartItems(state.cartItems, newItem, itemIdx),
    orderTotal: state.orderTotal + quantity * book.price
  };
};
const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "FETCH_BOOKS_REQUESTED":
      return {
        ...state,
        loading: true
      };

    case "FETCH_BOOKS_LOADED":
      return {
        ...state,
        books: action.payload,
        loading: false
      };
    case "FETCH_BOOK_ADDED_TO_CART":
      return updateOrder(state, action, 1);
    case "FETCH_REMOVE_ALL_BOOKS_FROM_CART":
      const removedItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
      return {
        ...state,
        cartItems: removedItems
      };
    case "FETCH_REMOVE_BOOK_FROM_CART":
      return updateOrder(state, action, -1);

    default:
      return state;
  }
};
export default reducer;
