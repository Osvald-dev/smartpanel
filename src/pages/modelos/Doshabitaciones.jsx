import React from 'react';
import './modelos.css';
import { CardA2 } from '../../components/cards/dos-habitaciones/CardA2';
import { CardB2 } from '../../components/cards/dos-habitaciones/CardB2';
import { CardC2 } from '../../components/cards/dos-habitaciones/CardC2';
import { CardD2 } from '../../components/cards/dos-habitaciones/CardD2';
import { CardE2 } from '../../components/cards/dos-habitaciones/CardE2';
import { CardF2 } from '../../components/cards/dos-habitaciones/CardF2';
import { CardG2 } from '../../components/cards/dos-habitaciones/CardG2';

const DosHabitaciones = () => {
  return (
    <div className='bg-2h'>

      <section className="section-two-bedrooms">
        <div className="container-full">
          <div className="section-title-container">
            <h2 className="section-title"> 2 Habitaciones</h2>
          </div>
            <div className='container-full'>
              <div className='col-md-6' >
                <CardA2 />
              </div>
              <div className='col-md-6'>
                <CardB2 />
              </div>
              <div className='col-md-6'>
                <CardC2 />
              </div>
              <div className='col-md-6'>
                <CardD2 />
              </div >
              <div className='col-md-6'>
                <CardE2 />
              </div>
              <div className='col-md-6'>
                <CardF2 />
              </div>
              <div className='col-md-4'>
                <CardG2 />
              </div>
            </div>
          </div>
        
      </section>
      </div>
      
  );
};
export default DosHabitaciones;