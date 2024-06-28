import React from 'react';
import './modelos.css';
import { CardA2 } from '../../components/cards/dos-habitaciones/CardA2';
import { CardB2 } from '../../components/cards/dos-habitaciones/CardB2';
import { CardC2 } from '../../components/cards/dos-habitaciones/CardC2';
import { CardD2 } from '../../components/cards/dos-habitaciones/CardD2';
import { CardE2 } from '../../components/cards/dos-habitaciones/CardE2';
import { CardF2 } from '../../components/cards/dos-habitaciones/CardF2';
import { CardG2 } from '../../components/cards/dos-habitaciones/CardG2';
import { CardH2 } from '../../components/cards/dos-habitaciones/CardH2';
import { CardI2 } from '../../components/cards/dos-habitaciones/CardI2';
import { CardJ2 } from '../../components/cards/dos-habitaciones/CardJ2';

const DosHabitaciones = () => {
  return (

        <div className="container-full bg-modelo">
          <div className="section-title-container">
            <h2 className="section-title"> 2 Habitaciones</h2>
          </div>

          <div className="bg-cards row">
            <div className="col-12 col-lg-6">
              <CardA2 />
            </div>
            <div className="col-12 col-lg-6">
              <CardB2 />
            </div>
            <div className="col-12 col-lg-6">
              <CardC2 />
            </div>
            <div className="col-12 col-lg-6">
              <CardD2 />
            </div>
            <div className="col-12 col-lg-6">
              <CardE2 />
            </div>
            <div className="col-12 col-lg-6">
              <CardF2 />
            </div>
            <div className="col-12 col-lg-6">
              <CardG2 />
            </div>
            <div className="col-12 col-lg-6">
              <CardH2 />
            </div>
            <div className="col-12 col-lg-6">
              <CardI2 />
            </div>
            <div className="col-12 col-lg-6">
              <CardJ2 />
            </div>
          </div>
        </div>


  );
};
export default DosHabitaciones;