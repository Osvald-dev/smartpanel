import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import '../../index.css';
import logo from '../../assets/logo/Logo-Blanco.png';

export const Header = () => {
  return (
    <div className='navegacion'>
      <nav className="navbar navbar-expand-lg bg-custom-color">
        <div className="container-sm">
          <Link className="navbar-brand" to="/"><img className="custom-logo" src={logo} alt="logotipo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav text-warning">
              <li className="nav-item">
                <Link className="nav-link" to="/" aria-current="page">¿Quiénes somos?</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/preguntas">Preguntas frecuentes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Detalles Constructivos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Comentarios</Link>
              </li>
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Modelos
                </span>
                <ul className="dropdown-menu">
                  <li className="dropdown-submenu">
                    <span className="dropdown-item dropdown-toggle">
                      Planta Alta
                    </span>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/modelos/planta-alta/doshabitaciones">2 Habitaciones</Link></li>
                      <li><Link className="dropdown-item" to="/modelos/planta-alta/treshabitaciones">3 Habitaciones</Link></li>
                      <li><Link className="dropdown-item" to="/modelos/planta-alta/cuatrohabitaciones">4 Habitaciones</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <span className="dropdown-item dropdown-toggle">
                      Planta Baja
                    </span>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/modelos/planta-baja/doshabitaciones">2 Habitaciones</Link></li>
                      <li><Link className="dropdown-item" to="/modelos/planta-baja/treshabitaciones">3 Habitaciones</Link></li>
                      <li><Link className="dropdown-item" to="/modelos/planta-baja/cuatrohabitaciones">4 Habitaciones</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/modelos/duplex">Duplex</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
