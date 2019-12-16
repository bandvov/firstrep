import React from "react";
import "./BookList.scss";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import withBookService from "../hoc";
import bookLoaded from "../../actions";
import compose from "../../utils";
import {Spinner} from "../spinner";

class BookList extends React.Component {
  componentDidMount() {
    const { bookstoreService, bookLoaded } = this.props;
    console.log(bookstoreService);

    bookstoreService.getBook().then(response => {
      bookLoaded(response);
    });
  }

  render() {
    
    const { books, loading } = this.props;
    console.log(this.props);
    if (loading) {
      return <Spinner />
    }
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
  }
}
const mapStateToProps = state => {
  return {
    books: state.books,
    loading: state.loading
  };
};

// BookList is wrapped two times
// export default withBookService()(connect(mapStateToProps,{bookLoaded})(BookList));
// or with compose
export default compose(
  withBookService(),
  connect(mapStateToProps, { bookLoaded })
)(BookList);
