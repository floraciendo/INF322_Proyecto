import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "../Adornos/box.css";

export const QuestionaryPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const nextPage = () => setPage((currentPage) => currentPage + 1);
  const prevPage = () => setPage((currentPage) => (currentPage > 0 ? currentPage - 1 : 0));

  return (
    <div className="box">
      <div className="questionary-page">
        {/* Inicio del cuestionario */}
        {page === 0 && (
          <div>
            <h1>Cuestionario diario</h1>
            <p>
              Este cuestionario te ayudará a evaluar tu nivel actual de
              bienestar, identificando factores que influyen en tu estado de
              ánimo, energía y salud en general.
            </p>
            <p>
              Hacer un seguimiento regular de tus experiencias diarias puede ser
              una herramienta importante para la auto-observación y la
              prevención de problemas de salud a largo plazo.
            </p>
            <br />
            <button onClick={nextPage}>Responder cuestionario</button>
          </div>
        )}

        {/* Primera pregunta */}
        {page === 1 && (
          <div>
            <h1>¿Cómo te haz sentido a lo largo del día?</h1>
            <div id="radioGroup">
              <div class="wrap">
                <label for="1">
                  <h1>😞</h1>
                </label>
                <input id="1" type="radio" value="1" name="opcion" />
              </div>
              <div class="wrap">
                <label for="2">
                  <h1>🙁</h1>
                </label>
                <input id="2" type="radio" value="2" name="opcion" />
              </div>
              <div class="wrap">
                <label for="3">
                  <h1>😐</h1>
                </label>
                <input id="3" type="radio" value="3" name="opcion" />
              </div>
              <div class="wrap">
                <label for="4">
                  <h1>🙂</h1>
                </label>
                <input id="4" type="radio" value="4" name="opcion" />
              </div>
              <div class="wrap">
                <label for="5">
                  <h1>😄</h1>
                </label>
                <input id="5" type="radio" value="5" name="opcion" />
              </div>
            </div>
            <br />
            <button onClick={prevPage}>Atrás</button>
            <button onClick={nextPage}>Siguiente</button>
          </div>
        )}

        {/* Segunda pregunta */}
        {page === 2 && (
          <div>
            <h1>¿Qué característica(s) describen mejor lo que sientes?</h1>
            <div id="checkGroup">
              <div>
                <div className="wrap">
                  <input id="6" type="checkbox" />
                  <label htmlFor="6">Ansiedad</label>
                </div>
                <div className="wrap">
                  <input id="7" type="checkbox" />
                  <label htmlFor="7">Estrés</label>
                </div>
                <div className="wrap">
                  <input id="8" type="checkbox" />
                  <label htmlFor="8">Culpa</label>
                </div>
                <div className="wrap">
                  <input id="9" type="checkbox" />
                  <label htmlFor="9">Irritable</label>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <input id="10" type="checkbox" />
                  <label htmlFor="10">Agobiado</label>
                </div>
                <div className="wrap">
                  <input id="11" type="checkbox" />
                  <label htmlFor="11">Miedo</label>
                </div>
                <div className="wrap">
                  <input id="12" type="checkbox" />
                  <label htmlFor="12">Decepción</label>
                </div>
                <div className="wrap">
                  <input id="13" type="checkbox" />
                  <label htmlFor="13">Pena</label>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <input id="14" type="checkbox" />
                  <label htmlFor="14">Paz</label>
                </div>
                <div className="wrap">
                  <input id="15" type="checkbox" />
                  <label htmlFor="15">Alivio</label>
                </div>
                <div className="wrap">
                  <input id="16" type="checkbox" />
                  <label htmlFor="16">Asombro</label>
                </div>
                <div className="wrap">
                  <input id="17" type="checkbox" />
                  <label htmlFor="17">Diversión</label>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <input id="18" type="checkbox" />
                  <label htmlFor="18">Felicidad</label>
                </div>
                <div className="wrap">
                  <input id="19" type="checkbox" />
                  <label htmlFor="19">Orgullo</label>
                </div>
                <div className="wrap">
                  <input id="20" type="checkbox" />
                  <label htmlFor="20">Confianza</label>
                </div>
                <div className="wrap">
                  <input id="21" type="checkbox" />
                  <label htmlFor="21">Valentía</label>
                </div>
              </div>
            </div>
            <br />
            <button onClick={prevPage}>Atrás</button>
            <button onClick={nextPage}>Siguiente</button>
          </div>
        )}

        {/* Tercera pregunta */}
        {page === 3 && (
          <div>
            <h1>¿Qué aspectos están influyendo en cómo te sientes?</h1>
            <div id="checkGroup">
              <div>
                <div className="wrap">
                  <input id="22" type="checkbox" />
                  <label htmlFor="22">Quehaceres</label>
                </div>
                <div className="wrap">
                  <input id="23" type="checkbox" />
                  <label htmlFor="23">Familia</label>
                </div>
                <div className="wrap">
                  <input id="24" type="checkbox" />
                  <label htmlFor="24">Amistades</label>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <input id="25" type="checkbox" />
                  <label htmlFor="25">Pasatiempos</label>
                </div>
                <div className="wrap">
                  <input id="26" type="checkbox" />
                  <label htmlFor="26">Pareja</label>
                </div>
                <div className="wrap">
                  <input id="27" type="checkbox" />
                  <label htmlFor="27">Clima</label>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <input id="28" type="checkbox" />
                  <label htmlFor="28">Dinero</label>
                </div>
                <div className="wrap">
                  <input id="29" type="checkbox" />
                  <label htmlFor="29">Educación</label>
                </div>
                <div className="wrap">
                  <input id="30" type="checkbox" />
                  <label htmlFor="30">Felicidad</label>
                </div>
              </div>
              <div>
                <div className="wrap">
                  <input id="31" type="checkbox" />
                  <label htmlFor="31">Trabajo</label>
                </div>
                <div className="wrap">
                  <input id="32" type="checkbox" />
                  <label htmlFor="32">Identidad</label>
                </div>
                <div className="wrap">
                  <input id="33" type="checkbox" />
                  <label htmlFor="33">Salud</label>
                </div>
              </div>
            </div>
            <br />
            <button onClick={prevPage}>Atrás</button>
            <button onClick={nextPage}>Siguiente</button>
          </div>
        )}

        {/* Final del cuestionario */}
        {page === 4 && (
          <div>
            <h1>Cuestionario completado</h1>
            <p>
              Gracias por completar el cuestionario. Tus respuestas te ayudan a
              entender mejor los factores que influyen en tu bienestar diario.
            </p>
            <p>
              Recuerda que pequeños cambios pueden hacer una gran diferencia. Te
              invitamos a seguir reflexionando sobre tu bienestar y a cuidarte
              cada día.
            </p>
            <br />
            <button onClick={() => navigate("/")}>Volver al inicio</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionaryPage
