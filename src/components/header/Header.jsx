import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo/Logo-Blanco.png';

export const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(null);

  const handleToggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    if (selectedPDF) {
      downloadPDF(selectedPDF);
    }
  }, [selectedPDF]);

  const handleNavbarLinkClick = (event) => {
    if (event.target.textContent === "Detalles Constructivos") {
      setSubmenuVisible(!submenuVisible);
    } else {
      setCollapsed(true);
      setSubmenuVisible(false);
      setSelectedPDF(null);

      if (event.target.textContent === "Línea Premium") {
        setSelectedPDF("linea-premium");
      } else if (event.target.textContent === "Línea Clásica") {
        setSelectedPDF("linea-clasica");
      }
    }
  };

  const downloadPDF = (pdfType) => {
    const pdfLink = document.createElement('a');
    pdfLink.href = pdfType === "linea-premium" ? '/pdf/FICHA TECNICA LINEA PREMIUMY.pdf' : '/pdf/FICHA TECNICA CLASICA.pdf';
    pdfLink.download = `${pdfType}-smart-panel.pdf`;
    pdfLink.style.display = 'none';
    document.body.appendChild(pdfLink);
    pdfLink.click();
    document.body.removeChild(pdfLink);
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
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Detalles Constructivos
                </span>

                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className={`dropdown-item ${selectedPDF === "linea-premium" ? "selected" : ""}`}
                      download="FICHA TECNICA LINEA PREMIUMY.pdf"
                      onClick={() => setSelectedPDF("linea-premium")}
                    >
                      Línea Premium
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${selectedPDF === "linea-clasica" ? "selected" : ""}`}

                      download="FICHA TECNICA CLASICA.pdf"
                      onClick={() => setSelectedPDF("linea-clasica")}
                    >
                      Línea Clásica
                    </Link>
                  </li>
                </ul>

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
};



