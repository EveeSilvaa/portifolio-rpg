import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Historia</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contato">Contato</Link>
    </nav>
  );
}

export default Navbar;