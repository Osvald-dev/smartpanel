import React from 'react';
import { Link } from 'react-router-dom';

export const Modelos = () => {
  return (
    <div>
      <div>
        <h1>Modelos</h1>

        {/* Mostrar subcategorías de Planta Baja */}
        <div id="planta-baja">
          <h2>Planta Baja</h2>
          <ul>
            <li>
              <Link to="/modelos/planta-baja/doshabitaciones">2 Habitaciones</Link>
            </li>
            <li>
              <Link to="/modelos/planta-baja/treshabitaciones">3 Habitaciones</Link>
            </li>
            <li>
              <Link to="/modelos/planta-baja/cuatrohabitaciones">4 Habitaciones</Link>
            </li>
          </ul>
        </div>

        {/* Mostrar subcategorías de Planta Alta */}
        <div id="planta-alta">
          <h2>Planta Alta</h2>
          <ul>
            <li>
              <Link to="/modelos/planta-alta/doshabitaciones">2 Habitaciones</Link>
            </li>
            <li>
              <Link to="/modelos/planta-alta/treshabitaciones">3 Habitaciones</Link>
            </li>
            <li>
              <Link to="/modelos/planta-alta/cuatrohabitaciones">4 Habitaciones</Link>
            </li>
          </ul>
        </div>

        {/* Mostrar modelos de Duplex */}
        <div id="duplex">
          <h2>
            <Link to="/modelos/duplex">Duplex</Link>
          </h2>
          {/* Enlace a la página de Duplex */}
        </div>
      </div>
    </div>
  );
};
