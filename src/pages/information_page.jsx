import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Adornos/InformationPage.css";
import saludMentalImg from "../imagenes/salud_mental.jpg";


const informationData = {
  1: {
    title: "Importancia de la salud mental",
    content: (
      <>
        <p>
          La salud mental es fundamental para nuestro bienestar general, ya que
          afecta cómo pensamos, sentimos y actuamos en nuestra vida diaria. Mantener
          una buena salud mental nos permite manejar el estrés, relacionarnos
          positivamente con los demás y tomar decisiones saludables.
        </p>
        <p>
          Promover la salud mental es esencial para una vida equilibrada y plena,
          especialmente en entornos como la educación, donde el estrés y la presión
          son constantes.
        </p>
      </>
    ),
    image: saludMentalImg,
    
  },
  2: {
    title: "Preguntas frecuentes sobre la salud mental",
    content: (
      <>
        <p>
          <strong>¿Dónde pedir ayuda?</strong>
          <br />
          Existe la línea de prevención del suicidio que es gratuita y a través de ella, las personas que estén enfrentando una emergencia o crisis de salud mental asociada al suicidio, podrán contactarse con un psicólogo que los escuchará y ayudará de lunes a domingo, las 24 horas del día.
          <br />
          Para eso deberán llamar desde celulares de cualquier compañía al *4141 cuando requieran asistencia.
        </p>
        <p>
          <strong>¿Qué es la depresión?</strong>
          <br />
          Es un trastorno del estado de ánimo con tristeza persistente, pérdida de
          interés en actividades y fatiga. Puede causar cambios en el apetito, sueño
          y afectar la vida diaria.
        </p>
        <p>
          <strong>¿Qué es la ansiedad?</strong>
          <br />
          Es un trastorno caracterizado por preocupación excesiva o miedo ante
          situaciones cotidianas, con síntomas como inquietud, tensión,
          palpitaciones y dificultad para concentrarse.
        </p>
        <p>
          <strong>¿Qué es el trastorno bipolar?</strong>
          <br />
          Es un trastorno con cambios extremos de estado de ánimo entre manía (alta
          energía y euforia) y depresión (tristeza profunda), afectando la vida
          diaria significativamente.
        </p>
      </>
    ),
    
  },
  3: {
    title: "Relación entre emoción y estado de ánimo",
    content: (
      <>
        <p>
          Las emociones y los estados de ánimo están estrechamente relacionados, ya
          que ambos afectan cómo percibimos y respondemos a nuestro entorno. Las
          emociones son reacciones intensas y de corta duración ante situaciones
          específicas, como la alegría por una buena noticia o la tristeza por una
          pérdida.
        </p>
        <p>
          Por otro lado, los estados de ánimo son más persistentes y menos
          específicos, influenciados por factores como el contexto social o el
          bienestar físico. Aunque una emoción intensa puede desencadenar un estado
          de ánimo prolongado, los estados de ánimo también pueden predisponer a
          experimentar ciertas emociones con mayor frecuencia.
        </p>
      </>
    ),
    
  },
  4: {
    title: "Consejos para controlar la ansiedad",
    content: (
      <>
        <p>
          <strong>1. Respira profundamente:</strong> realiza ejercicios de
          respiración lenta y profunda para calmar tu mente y reducir la tensión.
        </p>
        <p>
          <strong>2. Practica la atención plena (mindfulness):</strong> dedica unos
          minutos al día a estar presente, observando tus pensamientos sin
          juzgarlos.
        </p>
        <p>
          <strong>3. Mantén una rutina regular:</strong> establece horarios para
          dormir, comer y ejercitarte, creando un sentido de estabilidad.
        </p>
        <p>
          <strong>4. Limita el consumo de cafeína y azúcar:</strong> evita alimentos
          y bebidas que puedan aumentar la sensación de ansiedad.
        </p>
        <p>
          <strong>5. Busca apoyo:</strong> habla con amigos, familiares o un
          profesional sobre tus preocupaciones para aliviar la carga emocional.
        </p>
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
    <div className="information-page">
    <h2>{topic.title}</h2>
    <div className="content-wrapper">
      <img
        src={topic.image}
        alt={`Imagen relacionada con ${topic.title}`}
        className="topic-image"
      />
      <div className="topic-content">{topic.content}</div>
    </div>
    <button onClick={() => navigate(-1)} className="return-button">
      Volver
    </button>
  </div>
  );
  
};

export default InformationPage;
