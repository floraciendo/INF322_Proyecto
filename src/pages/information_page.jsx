import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const informationData = {
  1: {
    title: "Importancia de la salud mental",
    content: (
      <>
        <p>
          La salud mental es fundamental para nuestro bienestar general, ya que
          afecta cómo pensamos, sentimos y actuamos en nuestra vida diaria.
        </p>
        <p>
          Mantener una buena salud mental nos permite manejar el estrés,
          relacionarnos positivamente con los demás y tomar decisiones
          saludables.
        </p>
      </>
    ),
  },
  2: {
    title: "Preguntas frecuentes sobre la salud mental",
    content: (
      <>
        <h3>¿Qué es la depresión?</h3>
        <p>
          Es un trastorno del estado de ánimo caracterizado por tristeza
          persistente y pérdida de interés en las actividades diarias.
        </p>
        <h3>¿Qué es la ansiedad?</h3>
        <p>
          Es un trastorno caracterizado por preocupación excesiva y miedo ante
          situaciones cotidianas.
        </p>
        <h3>¿Qué es el trastorno bipolar?</h3>
        <p>
          Es un trastorno que causa cambios extremos en el estado de ánimo, de
          la euforia a la depresión.
        </p>
      </>
    ),
  },
  3: {
    title: "Relación entre emoción y estado de ánimo",
    content: (
      <>
        <p>
          Las emociones y los estados de ánimo están estrechamente relacionados
          y afectan nuestra percepción y respuesta ante situaciones.
        </p>
        <p>
          Un estado de ánimo positivo puede mejorar la salud mental, mientras
          que emociones negativas pueden afectar el bienestar.
        </p>
      </>
    ),
  },
  4: {
    title: "Consejos para controlar la ansiedad",
    content: (
      <>
        <ol>
          <li>
            Respira profundamente y realiza ejercicios de respiración lenta.
          </li>
          <li>Practica la atención plena para calmar la mente.</li>
          <li>Mantén una rutina de sueño y ejercicio.</li>
          <li>Limita el consumo de cafeína y alcohol.</li>
          <li>Habla con alguien de confianza sobre tus preocupaciones.</li>
        </ol>
      </>
    ),
  },
};

const InformationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const topic = informationData[id];

  if (!topic) {
    return <p>El tema no existe.</p>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{topic.title}</h2>
      <div>{topic.content}</div>
      <button onClick={() => navigate(-1)} style={{ marginTop: "20px" }}>
        Volver
      </button>
    </div>
  );
};

export default InformationPage;

