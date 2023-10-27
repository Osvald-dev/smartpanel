import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DosHabitaciones from './Doshabitaciones';
import TresHabitaciones from './Treshabitaciones';
import Duplex from './Duplex';
import { Header } from '../../components/header/Header';
import {SliderComponent} from '../../components/slider/Slidercomponent';
import {Footer2} from '../../components/footer/Footer2'
import { Precio } from '../Precio';
export const Modelos = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <Header></Header>
      <SliderComponent></SliderComponent>
      
      <div>
        {pathname === '/modelos/doshabitaciones' && (
          <DosHabitaciones />
        )}
        {pathname === '/modelos/treshabitaciones' && (
          <TresHabitaciones />
        )}
       {pathname === '/modelos/duplex' && <Duplex />}
        {pathname !== '/modelos/doshabitaciones' &&
          pathname !== '/modelos/treshabitaciones' &&
          pathname !== '/modelos/cuatrohabitaciones' &&
          pathname !== '/modelos/duplex' && <p>Ruta no encontrada</p>}
      </div>
      <Precio />
      <Footer2 />
    </>
  );
};
