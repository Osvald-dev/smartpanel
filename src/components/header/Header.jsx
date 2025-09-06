import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo-web.png";

import "./header.css";
import "../footer/footer.css";

export const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [submenuConstructivos, setSubmenuConstructivos] = useState(false);
  const [submenuModelos, setSubmenuModelos] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(null);

  const handleToggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    if (selectedPDF) {
      downloadPDF(selectedPDF);
    }
  }, [selectedPDF]);

  const handleNavbarLinkClick = () => {
    setCollapsed(true);
    setSubmenuConstructivos(false);
    setSubmenuModelos(false);
    setSelectedPDF(null);
  };

  const downloadPDF = (pdfType) => {
    const pdfLink = document.createElement("a");
    pdfLink.href =
      pdfType === "linea-premium"
        ? "/pdf/FICHA TECNICA LINEA PREMIUMY.pdf"
        : "/pdf/FICHA TECNICA CLASICA.pdf";
    pdfLink.download = `${pdfType}-smart-panel.pdf`;
    pdfLink.style.display = "none";
    document.body.appendChild(pdfLink);
    pdfLink.click();
    document.body.removeChild(pdfLink);
  };

  return (
    <header className="navegacion" id="#somos">
      <nav className="navbar">
        <div className="container-sm d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img className="custom-logo" src={logo} alt="logotipo" />
          </Link>

          {/* Botón Hamburguesa */}
          <button
            className={`hamburger ${collapsed ? "" : "is-active"}`}
            type="button"
            onClick={handleToggleNavbar}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Menú móvil */}
          <div className={`mobile-menu ${collapsed ? "" : "open"}`}>
            <ul className="text-start"> {/* 👈 ahora alineado a la izquierda */}
              <li>
                <Link to="/quienes-somos" onClick={handleNavbarLinkClick}>
                  ¿Quiénes somos?
                </Link>
              </li>
              <li>
                <Link to="/contacto" onClick={handleNavbarLinkClick}>
                  Contacto
                </Link>
              </li>
              <li>
                <span onClick={() => setSubmenuConstructivos(!submenuConstructivos)}>
                  Detalles Constructivos
                </span>
                {submenuConstructivos && (
                  <ul className="submenu">
                    <li onClick={() => setSelectedPDF("linea-premium")}>
                      Línea Premium
                    </li>
                    <li onClick={() => setSelectedPDF("linea-clasica")}>
                      Línea Clásica
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <span onClick={() => setSubmenuModelos(!submenuModelos)}>
                  Modelos
                </span>
                {submenuModelos && (
                  <ul className="submenu">
                    <li>
                      <Link to="/modelos/doshabitaciones" onClick={handleNavbarLinkClick}>
                        2 Habitaciones
                      </Link>
                    </li>
                    <li>
                      <Link to="/modelos/treshabitaciones" onClick={handleNavbarLinkClick}>
                        3 Habitaciones
                      </Link>
                    </li>
                    <li>
                      <Link to="/modelos/smartclasic" onClick={handleNavbarLinkClick}>
                        Smart Clasic
                      </Link>
                    </li>
                    <li>
                      <Link to="/modelos/smart-ai" onClick={handleNavbarLinkClick}>
                        Smart AI
                      </Link>
                    </li>
                    <li>
                      <Link to="/modelos/duplex" onClick={handleNavbarLinkClick}>
                        Duplex
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
