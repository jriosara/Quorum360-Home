import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Somos } from './pages/Somos';
import { Comunidad } from './pages/Comunidad';
import { Servicios } from './pages/Servicios';
import { Soporte } from './pages/Soporte';
import { Contact } from './pages/Contact';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import './styles/Header.css';
import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/src/pages/Home.js" element={<Home />} />
        <Route path="/src/pages/Somos.js" element={<Somos />} />
        <Route path="/src/pages/Comunidad.js" element={<Comunidad />} />
        <Route path="/src/pages/Servicios.js" element={<Servicios />} />
        <Route path="/src/pages/Soporte.js" element={<Soporte />} />
        <Route path="/src/pages/Contact.js" element={<Contact />} />
      </Routes>
      <HeroSection />
      <Gallery />
      <Testimonials />
      <Footer />
    </Router>
  );
}

export default App;
