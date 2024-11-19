import React from "react";
import { useNavigate } from "react-router-dom";
import "../Adornos/HomePage.css";
import saludMentalImg from "../imagenes/SM.jpg"; 

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Bienvenido a la Página de Salud Mental 😊</h1>
      <div className="content-container">
        {/* Imagen a la izquierda */}
        <img src={saludMentalImg} alt="Salud Mental" className="home-image" />
        {/* Botones a la derecha */}
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
    </div>
  );
};

export default HomePage;
