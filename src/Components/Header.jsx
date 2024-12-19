import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Minha Aplicação</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;