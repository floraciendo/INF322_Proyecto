import React from "react";
import { Link } from "react-router-dom";

const topics = [
  { id: 1, title: "Importancia de la salud mental", color: "#b39ddb" },
  {
    id: 2,
    title: "Preguntas frecuentes sobre la salud mental",
    color: "#ffd54f",
  },
  {
    id: 3,
    title: "Relación entre emoción y estado de ánimo",
    color: "#80deea",
  },
  { id: 4, title: "Consejos para controlar la ansiedad", color: "#f48fb1" },
];

const InformationPage = () => {
  return (
    <div className="main-page" style={{ textAlign: "center", padding: "20px" }}>
      <h1>Sobre salud mental</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {topics.map((topic) => (
          <Link to={`/information/${topic.id}`} key={topic.id}>
            <div
              style={{
                width: "200px",
                height: "150px",
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

export default InformationPage;



/*
import React, { useState } from 'react'

export const InformationPage = () => {
  return (
    <div className='information-page'>
      <p>Página que muestra información relevante sobre la salud mental</p>
    </div>
  )
}

export default InformationPage
*/
