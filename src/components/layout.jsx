import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import MethodsPage from '../pages/methods_page'
import InformationPage from '../pages/information_page'
import QuestionaryPage from '../pages/questionary_page'
//import InformationPage from "../pages/InformationPage";
import Detalle from '../pages/detalles'



import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="layout">
        <NavBar />
        <div className="layout__page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/questionary" element={<QuestionaryPage />} />

            <Route path="/methods" element={<MethodsPage />} />
            <Route path="/information" element={<Detalle />} />
            <Route path="/information/:id" element={<InformationPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Layout
