import React from "react";
import "./Header.scss";
const Header = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <a href="#" className="logo text-dark">
        ReStore
      </a>
      <div className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart">
        </i>
          {numItems} items (${total})
      </div>
    </header>
  );
};
export default Header;
