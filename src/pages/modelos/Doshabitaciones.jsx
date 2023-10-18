import React from 'react';
import './modelos.css';
import { Link } from 'react-router-dom';

const DosHabitaciones = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to='/'>
          <img src={logo} alt='Logo' className='navbar-logo' />
        </Link>

        <div >
          <Link to='/'>
            <button className="navbar-button arrow">
              <i className="fas fa-arrow-up"></i>
            </button>
          </Link>
        </div>
        <div >
          <button className="navbar-button whats" onClick={handleWhatsAppAction}>
            <i className="fab fa-whatsapp"></i>
          </button>
        </div>

      </nav>
      <h2>Modelo de Dos Habitaciones</h2>
      {/* Contenido específico para el modelo de dos habitaciones */}
    </div>
  );
};

export default DosHabitaciones; 
