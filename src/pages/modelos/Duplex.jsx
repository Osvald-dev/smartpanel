import React from 'react';
import './modelos.css';
import { CardDP1 } from '../../components/cards/duplex/CardDP1';
import { CardDP2 } from '../../components/cards/duplex/CardDP2';


const Duplex = () => {
  return (
    <div className='bg-2h'>
      
      <section className="section-two-bedrooms">
        <div className="container-full">
        <div className="section-title-container">
        <h2 className="section-title"> Duplex </h2>
      </div>
          <div className="container-full">
            <div className="col-md-4">
              <CardDP1 />
            </div>
            <div className="col-md-4">
              <CardDP2 />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Duplex;