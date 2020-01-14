import React from "react";
import "./BookList.scss";
import { connect } from "react-redux";
import BookListItem from "../BookListItem";
import withBookStoreService from "../hoc";
import { booksLoaded, bookAddedToCart,booksRequested } from "../../actions";
import "./BookList.scss";
import Spinner from "../Spinner";

const BookList = props => {
  const { books, bookAddedToCart } = props;
  return (
    <ul className="book-list">
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              bookAddedToCart={() => {
                bookAddedToCart(book.id);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends React.Component {
  componentDidMount() {
    this.props.bookRequested()
    this.props.bookStoreService.getBooks().then(data => {
      this.props.booksLoaded(data);
    });
  }
  render() {
    const { bookAddedToCart, loading } = this.props;
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <BookList books={this.props.books} bookAddedToCart={bookAddedToCart} />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    loading: state.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    booksLoaded: id => {
      dispatch(booksLoaded(id));
    },
    bookAddedToCart: id => {
      dispatch(bookAddedToCart(id));
    },
    bookRequested:()=>{
      dispatch(booksRequested())
    }
  };
};

export default withBookStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
);
