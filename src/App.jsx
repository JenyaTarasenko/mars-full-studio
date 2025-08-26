import { useState } from 'react'
import './App.css'
// подключение перевода
import './ i18n';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AbautPage/AboutPage';
import DetailPage from './pages/DetailPage/DetailPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      {/* <Navbar />
      <ListView /> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-mars-studio"  element={<AboutPage />} />
          {/* сформировал страничку детальная информация каждого проекта из двух компонентов 
          NavBar и ProjectDetail на django он ссылается на url views  */}
          <Route path="/projects/:slug" element={<DetailPage />} />
           {/*страница нью */}
      
        </Routes>
      </Router>
    </>
  )
}

export default App
