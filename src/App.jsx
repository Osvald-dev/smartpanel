import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Modelos } from './pages/modelos/Modelos';
import { Preguntas } from './pages/preguntas/Preguntas';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modelos/*" element={<Modelos />} />
          <Route path='/preguntas/' element={<Preguntas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
