import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./MainPage";
import InformationPage from "./InformationPage";

const Layouts = () => {
  return (
    <BrowserRouter>
      <div className="layout">
        <h1 className="layout__title">Salud Mental</h1>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/information" element={<MainPage />} />
          <Route path="/information/:id" element={<InformationPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Layouts;
