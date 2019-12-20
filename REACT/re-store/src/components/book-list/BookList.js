import React from "react";
import "./BookList.scss";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import withBookService from "../hoc";
import { fetchBooks } from "../../actions";
import compose from "../../utils";
import { Spinner } from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({ books }) => {
  return (
    <ul className="book-list">
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        );
      })}
    </ul>
  );
};



class BookListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;
    console.log(this.props);
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return <BookList books={books} />;
  }
}
const mapStateToProps = state => {
  return {
    books: state.books,
    loading: state.loading,
    error: state.error
  };
};
const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  };
};

// BookList is wrapped two times
// export default withBookService()(connect(mapStateToProps,{bookLoaded})(BookList));
// or with compose
export default compose(
  withBookService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
