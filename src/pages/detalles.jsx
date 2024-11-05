import React from "react";
import { Link } from "react-router-dom";

const topics = [
  { id: 1, title: "Importancia de la salud mental", color: "#b39ddb" },
  { id: 2, title: "Preguntas frecuentes sobre la salud mental", color: "#ffd54f" },
  { id: 3, title: "Relación entre emoción y estado de ánimo", color: "#80deea" },
  { id: 4, title: "Consejos para controlar la ansiedad", color: "#f48fb1" },
];

const Detalle = () => {
  return (
    <div className="detalle" style={{ textAlign: "center", padding: "20px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", 
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "500px", 
          margin: "0 auto", 
        }}
      >
        {topics.map((topic) => (
          <Link to={`/information/${topic.id}`} key={topic.id}>
            <div
              style={{
                width: "450px",
                height: "200px",
                backgroundColor: topic.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                color: "#000000",
                fontWeight: "bold",
                textAlign: "center",
                cursor: "pointer",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              {topic.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Detalle;
