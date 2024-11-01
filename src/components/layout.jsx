import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import MethodsPage from '../pages/methods_page'
import InformationPage from '../pages/information_page'
import QuestionaryPage from '../pages/questionary_page'

import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <h1 className='layout__title'>Salud Mental</h1>
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/questionary' element={<QuestionaryPage />} />
            <Route path='/information' element={<InformationPage />} />
            <Route path='/methods' element={<MethodsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
