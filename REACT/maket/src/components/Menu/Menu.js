import React from "react";
import "./Menu.scss";

const Menu = ({ menuLinks }) => {
  const renderedLinks = menuLinks.map(item => {
    return (
      <li key={item.id}>
        <a href={item.link}>{item.label}</a>
      </li>
    );
  });
  return (
    <header>
      <nav className="d-flex">
        <input type="checkbox" id="checkbox-menu" />
        <label htmlFor="checkbox-menu">
          <ul className="menu touch">
            <li>
              <h2>
                <a href="#" className="logo">
                  Luxestate
                </a>
              </h2>
            </li>
            {renderedLinks}
          </ul>
          <div>
            <span className="toggle">
              <span></span>
            </span>
          </div>
        </label>
      </nav>
    </header>
  );
};
export default Menu;
