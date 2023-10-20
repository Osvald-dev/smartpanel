import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo/Logo-Blanco.png';

export const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const handleNavbarLinkClick = () => {
    setCollapsed(true); 
  };

  return (
    <div className='navegacion' id="#somos">
      <nav className="navbar navbar-expand-lg bg-custom-color">
        <div className="container-sm">
          <Link className="navbar-brand" to="/">
            <img className="custom-logo" src={logo} alt="logotipo" />
          </Link>
          <button className="navbar-toggler" type="button" onClick={handleToggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-warning">
              <li className="nav-item">
                <Link className="nav-link" to="/quienes-somos" onClick={handleNavbarLinkClick}>
                  ¿Quiénes somos?
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/preguntas" onClick={handleNavbarLinkClick}>
                  Preguntas frecuentes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleNavbarLinkClick}>
                  Detalles Constructivos
                </Link>
              </li>

              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Modelos
                </span>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/modelos/doshabitaciones" onClick={handleNavbarLinkClick}>
                      2 Habitaciones
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/modelos/treshabitaciones" onClick={handleNavbarLinkClick}>
                      3 Habitaciones
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/modelos/duplex" onClick={handleNavbarLinkClick}>
                      Duplex
                    </Link>
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
