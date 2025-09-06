import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DosHabitaciones from './Doshabitaciones';
import TresHabitaciones from './Treshabitaciones';
import Duplex from './Duplex';
import { SmartClasic } from './SmartClasic';
import {SmartAI} from './SmartAI';
import { Header } from '../../components/header/Header';
import {SliderComponent} from '../../components/slider/Slidercomponent';
import {Footer} from '../../components/footer/Footer'
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
        {pathname === '/modelos/smart-clasic' && (
          <SmartClasic />
        )}
        {pathname === '/modelos/smart-ai' && (
          <SmartAI />
        )}
       {pathname === '/modelos/duplex' && <Duplex />}
        {pathname !== '/modelos/doshabitaciones' &&
          pathname !== '/modelos/treshabitaciones' &&
          pathname !== '/modelos/cuatrohabitaciones' &&
          pathname !== '/modelos/smart-clasic' &&
          pathname !== '/modelos/smart-ai' &&
          pathname !== '/modelos/duplex' && <p>Ruta no encontrada</p>}
      </div>
      <Precio />
      <Footer />
    </>
  );
};
