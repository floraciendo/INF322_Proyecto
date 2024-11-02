import React from "react";
import { useParams, Link } from "react-router-dom";

const infoData = {
  1: {
    title: "Importancia de la salud mental",
    content: "La salud mental es fundamental para nuestro bienestar general...",
    color: "#b39ddb",
  },
  2: {
    title: "Preguntas frecuentes sobre la salud mental",
    content: "¿Qué es la depresión? Es un trastorno de estado de ánimo...",
    color: "#ffd54f",
  },
  3: {
    title: "Relación entre emoción y estado de ánimo",
    content:
      "Las emociones y los estados de ánimo están estrechamente relacionados...",
    color: "#80deea",
  },
  4: {
    title: "Consejos para controlar la ansiedad",
    content:
      "1. Respira profundamente: realiza ejercicios de respiración lenta...",
    color: "#f48fb1",
  },
};

const MainPage = () => {
  const { id } = useParams();
  const info = infoData[id];

  if (!info) {
    return <p>Información no encontrada.</p>;
  }

  return (
    <div
      className="information-page"
      style={{ textAlign: "center", padding: "20px" }}
    >
      <h1
        style={{
          backgroundColor: info.color,
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {info.title}
      </h1>
      <p
        style={{
          textAlign: "justify",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        {info.content}
      </p>
      <Link to="/information">
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#ccc",
            borderRadius: "5px",
          }}
        >
          Salir
        </button>
      </Link>
    </div>
  );
};

export default MainPage;
