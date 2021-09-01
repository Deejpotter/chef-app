import React from "react";
import { Link } from "react-router-dom";
import Container from "../Util/Container";

function Header(props) {
  return (
    <header>
      <Link to='/'>
        <h1>Chef Helper</h1>
      </Link>
    </header>
  );
}

export default Header;