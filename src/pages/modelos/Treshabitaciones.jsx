import React from 'react';
import './modelos.css';
import { CardA3 } from '../../components/cards/tres-habitaciones/CardA3';
import { CardB3 } from '../../components/cards/tres-habitaciones/CardB3';
import { CardC3 } from '../../components/cards/tres-habitaciones/CardC3';
import { CardD3 } from '../../components/cards/tres-habitaciones/CardD3';
import { CardE3 } from '../../components/cards/tres-habitaciones/CardE3';
import { CardF3 } from '../../components/cards/tres-habitaciones/CardF3';

const TresHabitaciones = () => {
  return (
    <div className='bg-2h'>
      
      <section className="section-two-bedrooms">
        <div className="container-full">
        <div className="section-title-container">
        <h2 className="section-title"> 3 Habitaciones</h2>
      </div>
          <div className="row">
            <div className="col-md-4">
              <CardA3 />
            </div>
            <div className="col-md-4">
              <CardB3 />
            </div>
            <div className="col-md-4">
              <CardC3 />
            </div>
            <div className="col-md-4">
              <CardD3 />
            </div>
            <div className="col-md-4">
              <CardE3 />
            </div>
            <div className="col-md-4">
              <CardF3 />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default TresHabitaciones;