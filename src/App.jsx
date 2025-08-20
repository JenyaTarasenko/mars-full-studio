import { useState } from 'react'
import './App.css'
// подключение перевода
import './ i18n';

import HomePage from './pages/HomePage/HomePage';
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
