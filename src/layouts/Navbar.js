import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-link-container">
        <Link className="nav-link active" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/quotes">
          Quotes
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
