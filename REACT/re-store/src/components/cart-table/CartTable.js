import React from "react";
import "./CartTable.scss";


const CartTable =(args) =>{
    return (
      <div className="cart-table">
        <h2>Your Order</h2>
        <table className="table" border="1px">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Count</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Site reliability engineer</td>
              <td>1</td>
              <td>$40</td>
              <td width="25%">
                <button className="btn btn-outline-success">
                  <i className="fa fa-plus-circle"></i>
                </button>
                <button className="btn btn-outline-warning">
                  <i className="fa fa-minus-circle"></i>
                </button>
                <button className="btn btn-outline-danger">
                  <i className="fa fa-train"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="5" className="total">
                Total: ${111}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

export default CartTable;
