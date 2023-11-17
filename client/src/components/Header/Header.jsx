import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-dark text-white p-3">
      <nav className="d-flex list-unstyled gap-2">
        <Link to={"/"}>
          <li>HOME</li>
        </Link>
        <Link to={"/add"}>
          <li>ADD</li>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
