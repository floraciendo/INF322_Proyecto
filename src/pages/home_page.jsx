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
import { useNavigate } from "react-router-dom";
import "../Adornos/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Bienvenido a la Página de Salud Mental 😊</h1>
      <br />
      <div className="button-container">
        <button
          onClick={() => navigate("/questionary")}
          className="info-button"
        >
          Hacer Cuestionario de Salud Mental
        </button>
        <button
          onClick={() => navigate("/information")}
          className="info-button"
        >
          Ver Información sobre Salud Mental
        </button>
        <button onClick={() => navigate("/methods")} className="info-button">
          Ver Métodos de relajación y bienestar
        </button>
      </div>
    </div>
  );
};

export default HomePage;

