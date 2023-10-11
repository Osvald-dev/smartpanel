import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DosHabitaciones from './Doshabitaciones';
import TresHabitaciones from './Treshabitaciones';
import CuatroHabitaciones from './Cuatrohabitaciones';
import Duplex from './Duplex';

export const Modelos = () => {
  const location = useLocation();
  const { pathname } = location;

  // Resto del código ...

  return (
    <div>
      <div>
        <h1>Nuestros Modelos</h1>
        {pathname === '/modelos/doshabitaciones' && (
          <DosHabitaciones />
        )}
        {pathname === '/modelos/treshabitaciones' && (
          <TresHabitaciones />
        )}
        {pathname === '/modelos/cuatrohabitaciones' && (
          <CuatroHabitaciones />
        )}
        {pathname === '/modelos/duplex' && <Duplex />}
        {pathname !== '/modelos/doshabitaciones' &&
          pathname !== '/modelos/treshabitaciones' &&
          pathname !== '/modelos/cuatrohabitaciones' &&
          pathname !== '/modelos/duplex' && <p>Ruta no encontrada</p>}
      </div>
    </div>
  );
};
