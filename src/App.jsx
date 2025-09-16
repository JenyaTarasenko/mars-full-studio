import { useState } from 'react'
import './App.css'
// подключение перевода
import './ i18n';
// библиотека для сео   npm install @dr.pogodin/react-helmet
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AbautPage/AboutPage';
import DetailPage from './pages/DetailPage/DetailPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// компонент для того чтобы страница начиналась с верху 
import ScrollToTop from './components/scrollTotop/ScrollTotop';
import NotFound from './pages/NotFound/NotFound';

function App() {


  return (
    <>
     
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-mars-studio"  element={<AboutPage />} />
            {/* сформировал страничку детальная информация каждого проекта из двух компонентов 
            NavBar и ProjectDetail на django он ссылается на url views  */}
            <Route path="/projects/:slug" element={<DetailPage />} />
            {/*страница нью */}
            {/* Любой другой путь → NotFound */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </HelmetProvider>
      
    </>
  )
}

export default App
