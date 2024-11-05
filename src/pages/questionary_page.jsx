import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const QuestionaryPage = () => {
  const navigate = useNavigate();
  return (
    <div className='questionary-page'>
      <h1>Cuestionario diario</h1>
      <p>Este cuestionario te ayudará a evaluar tu nivel actual de bienestar, identificando factores que influyen en tu estado de ánimo, energía y salud en general.</p>
      <p>Hacer un seguimiento regular de tus experiencias diarias puede ser una herramienta importante para la auto-observación y la prevención de problemas de salud a largo plazo.</p>
      <br />
      <button>
        Responder cuestionario
      </button>
      
      {/* Primera página preguntas */}
      {/* <div id="radioGroup">
        <h1>¿Cómo te haz sentido a lo largo del día?</h1>
        <div class="wrap">
          <label for="opcion1"><h1>😄</h1></label>
          <input id="opcion1" type="radio" value="1" name="opcion"/>
        </div>
        <div class="wrap">
          <label for="opcion2"><h1>🙂</h1></label>
          <input id="opcion2" type="radio" value="2" name="opcion"/>
        </div>
        <div class="wrap">
          <label for="opcion3"><h1>😐</h1></label>
          <input id="opcion3" type="radio" value="3" name="opcion"/>
        </div>
        <div class="wrap">
          <label for="opcion4"><h1>🙁</h1></label>
          <input id="opcion4" type="radio" value="4" name="opcion"/>
        </div>
        <div class="wrap">
          <label for="opcion5"><h1>😞</h1></label>
          <input id="opcion5" type="radio" value="5" name="opcion"/>
        </div>
      </div> */}
      
      {/* Segunda página preguntas */}
      {/* <div>
        <h1>¿Qué característica(s) describen mejor lo que sientes?</h1>
        <div>
          <input id="felicidad" type="checkbox"/>
          <label for="felicidad">Felicidad</label>

          <input id="paz" type="checkbox"/>
          <label for="paz">Paz</label>

          <input id="irritable" type="checkbox"/>
          <label for="irritable">Irritable</label>
          
          <input id="ansiedad" type="checkbox"/>
          <label for="ansiedad">Ansiedad</label>
        </div>
        <div>
          <input id="asombro" type="checkbox"/>
          <label for="asombro">Asombro</label>

          <input id="orgullo" type="checkbox"/>
          <label for="orgullo">Orgullo</label>

          <input id="agobiado" type="checkbox"/>
          <label for="agobiado">Agobiado</label>

          <input id="decepcion" type="checkbox"/>
          <label for="decepcion">Decepción</label>          
        </div>
        <div>
          <input id="alivio" type="checkbox"/>
          <label for="alivio">Alivio</label>
        
          <input id="valentia" type="checkbox"/>
          <label for="valentia">Valentía</label>
          
          <input id="estres" type="checkbox"/>
          <label for="estres">Estrés</label>

          <input id="culpa" type="checkbox"/>
          <label for="culpa">Culpa</label>
        </div>
        <div>
          <input id="confianza" type="checkbox"/>
          <label for="confianza">Confianza</label>

          <input id="diversion" type="checkbox"/>
          <label for="diversion">Diversión</label>

          <input id="miedo" type="checkbox"/>
          <label for="miedo">Miedo</label>

          <input id="pena" type="checkbox"/>
          <label for="pena">Pena</label>
        </div>
      </div> */}

      {/* Tercera página preguntas */}
      {/* <div>
        <h1>¿Qué te está afectando más?</h1>
        <div>
          <input id="1" type="checkbox"/>
          <label for="1">Quehaceres</label>

          <input id="2" type="checkbox"/>
          <label for="2">Familia</label>

          <input id="3" type="checkbox"/>
          <label for="3">Amistades</label>
        </div>
        <div>
          <input id="4" type="checkbox"/>
          <label for="4">Pasatiempos</label>

          <input id="5" type="checkbox"/>
          <label for="5">Pareja</label>

          <input id="6" type="checkbox"/>
          <label for="6">Clima</label>
        </div>
        <div>
          <input id="7" type="checkbox"/>
          <label for="7">Dinero</label>

          <input id="8" type="checkbox"/>
          <label for="8">Educación</label>
          
          <input id="9" type="checkbox"/>
          <label for="9">Felicidad</label>
        </div>
        <div>
        <input id="10" type="checkbox"/>
        <label for="10">Trabajo</label>

        <input id="11" type="checkbox"/>
        <label for="11">Identidad</label>

        <input id="12" type="checkbox"/>
        <label for="12">Salud</label>
        </div>
      </div> */}

      {/* Página final */}
      {/* <div>
        <h1>Cuestionario completado</h1>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div> */}
    </div>
  )
}

export default QuestionaryPage