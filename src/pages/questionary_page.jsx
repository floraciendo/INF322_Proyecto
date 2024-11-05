import React, { useState } from 'react'

export const QuestionaryPage = () => {
  return (
    <div className='questionary-page'>
      <h1>Cuestionario diario</h1>
      <p>Este cuestionario te ayudará a evaluar tu nivel actual de bienestar, identificando factores que influyen en tu estado de ánimo, energía y salud en general.</p>
      <p>Hacer un seguimiento regular de tus experiencias diarias puede ser una herramienta importante para la auto-observación y la prevención de problemas de salud a largo plazo.</p>
      <br />
      <button>
        Responder cuestionario
      </button>
      
      {/* <div id="radioGroup">
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

    </div>
  )
}

export default QuestionaryPage