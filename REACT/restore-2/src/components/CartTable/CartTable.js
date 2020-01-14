import React from "react";
import { connect } from "react-redux";
import "./CartTable.scss";
import {
  bookRemovedFromCart,
  bookAddedToCart,
  bookRemoveFromCart
} from "../../actions";

const CartTable = props => {
  const { items, orderTotal, bookRemovedFromCart, bookAddedToCart,bookRemoveFromCart } = props;
  return (
    <div className="cart-table">
      <table className="table">
        <thead>
          <tr>
            <td>Index</td>
            <td>Title</td>
            <td>Count</td>
            <td>Total</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.idx}</td>
                <td>{item.title}</td>
                <td>{item.count}</td>
                <td>${item.total}</td>
                <td width="25%">
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => bookAddedToCart(item.id)}
                  >
                    <i className="fa fa-plus-circle"></i>
                  </button>
                  <button className="btn btn-outline-dark" onClick={()=>bookRemoveFromCart(item.id)}>
                    <i className="fa fa-minus-circle"></i>
                  </button>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => bookRemovedFromCart(item.id)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="total">${orderTotal}</div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    items: state.cartItems,
    orderTotal: state.orderTotal
  };
};
const mapDispatchToProps = dispatch => {
  return {
    bookRemovedFromCart: id => {
      dispatch(bookRemovedFromCart(id));
    },
    bookAddedToCart: id => {
      dispatch(bookAddedToCart(id));
    },
    bookRemoveFromCart: id => {
      dispatch(bookRemoveFromCart(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
