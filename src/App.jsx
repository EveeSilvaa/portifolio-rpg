import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Projetos from "./Components/Projetos";
import Contato from "./Components/Contato";



function App () {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

//adicionar o frame motion, para animaçies suaves instalação npm install framer-motion
// icones legais de usar como font awesome ou hero icons npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons


//Exemplo de uso: no contato