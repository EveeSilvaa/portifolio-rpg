import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Projetos from "./Components/Projetos";
import Contato from "./Components/Contato";
import Header from "./components/Header";



const App = () => {
  return (
    <>
    <div>
      <Header />
      <Footer />
      <Contato />
      <Home />
      <Projetos />
    </div>
    </>
  );
}

export default App;

//adicionar o frame motion, para animaçies suaves instalação npm install framer-motion
// icones legais de usar como font awesome ou hero icons npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons


//Exemplo de uso: no contato