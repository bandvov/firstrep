import React from "react";
import "./CartTable.scss";

const CartTable = ({ items, total, onIcrease, onDecrease, onDelete }) => {
  return (
    <div className="cart-table">
      <h2>Your Order</h2>
      <table className="table" border="1px">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            const { id, idx, name, count, total } = item;
            return (
              <tr key={id}>
                <td>{idx}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td width="25%">
                  <button
                    className="btn btn-outline-success"
                    onClick={() => onIcrease(id)}
                  >
                    <i className="fa fa-plus-circle"></i>
                  </button>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => onDecrease(id)}
                  >
                    <i className="fa fa-minus-circle"></i>
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(id)}
                  >
                    <i className="fa fa-train"></i>
                  </button>
                </td>
                <tr className="total">
                  <td>${total}</td>
                </tr>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
