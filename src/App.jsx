import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Modelos } from './pages/modelos/Modelos';
import { ContactForm } from './pages/Contacto';
import { Texto } from './components/text/Texto';
import Home from './pages/Home';
import ScrollToTop from './components/cards/utils/Scroll';


function App() {
  return (

    <Router>
      <div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<Texto></Texto>} />
          <Route path="/modelos/*" element={<Modelos />} />
          <Route path='/contacto/' element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
