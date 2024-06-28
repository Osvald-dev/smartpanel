import React from 'react';
import './modelos.css';
import { CardA3 } from '../../components/cards/tres-habitaciones/CardA3';
import { CardB3 } from '../../components/cards/tres-habitaciones/CardB3';
import { CardC3 } from '../../components/cards/tres-habitaciones/CardC3';
import { CardD3 } from '../../components/cards/tres-habitaciones/CardD3';
import { CardE3 } from '../../components/cards/tres-habitaciones/CardE3';
import { CardF3 } from '../../components/cards/tres-habitaciones/CardF3';
import { CardG3 } from '../../components/cards/tres-habitaciones/CardG3';
import { CardH3 } from '../../components/cards/tres-habitaciones/CardH3';
import { CardI3 } from '../../components/cards/tres-habitaciones/CardI3';

const TresHabitaciones = () => {
  return (

    <div className="container-full bg-modelo">
      <div className="section-title-container">
        <h2 className="section-title"> 3 Habitaciones</h2>
      </div>
      <div className="bg-cards row">
        <div className="col-12 col-lg-6">
          <CardA3 />
        </div>
        <div className="col-12 col-lg-6">
          <CardB3 />
        </div>
        <div className="col-12 col-lg-6">
          <CardC3 />
        </div>
        <div className="col-12 col-lg-6">
          <CardD3 />
        </div>
        <div className="col-12 col-lg-6">
          <CardE3 />
        </div>
        <div className="col-12 col-lg-6">
          <CardF3 />
        </div>
        <div className="col-12 col-lg-6">
          <CardG3 />
        </div>
        <div className="col-12 col-lg-6">
          <CardH3 />
        </div>
        <div className="col-12 col-lg-6">
          <CardI3 />
        </div>
      </div>
    </div>
  );
};
export default TresHabitaciones;