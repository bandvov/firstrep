import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ onServiceShange }) => {
  return (
    <div className="d-flex header">
      <h1>
        <Link to="/">Star DB</Link>
      </h1>
      <ul className="">
        <li>
          <Link to="/people/" className="">
            People
          </Link>
        </li>
        <li>
          <Link to="/planets/" className="">
            Planets
          </Link>
        </li>
        <li>
          <Link to="/starships/" className="">
            Ships
          </Link>
        </li>
        <li>
          <Link to="/login" className="">
            Login
          </Link>
        </li>
        <li>
          <Link to="/secret" className="">
            Secret page
          </Link>
        </li>

      </ul>
      <button className="btn btn-primary btn-sm" onClick={onServiceShange}>
        change service
      </button>
    </div>
  );
};
export default Header;
