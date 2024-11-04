/*import React from 'react'

export const HomePage = () => {
  return (
    <>
      <p>Página principal de bienvenida 😊</p>
    </>
  )
}

export default HomePage
*/


import React from "react";
import { Link } from "react-router-dom";
import "../Adornos/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Bienvenido a la Página de Salud Mental 😊</h1>
      <Link to="/information">
        <button className="info-button">
          Ver Información sobre Salud Mental
        </button>
      </Link>
    </div>
  );
};

export default HomePage;

