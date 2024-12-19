import React from "react";

const Home = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="home"
    >
        <h1>Bem-vindo ao meu Portifólio RPG!</h1>
    </motion.div>
  );
};

export default Home;