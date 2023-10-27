import React from 'react';
import './modelos.css';
import { CardDP1 } from '../../components/cards/duplex/CardDP1';
import { CardDP2 } from '../../components/cards/duplex/CardDP2';


const Duplex = () => {
  return (
  
      
        <div className="container-full bg-modelo">
        <div className="section-title-container">
        <h2 className="section-title"> Duplex </h2>
      </div>
          <div className="bg-cards row">
            <div className="col-12 col-lg-6">
              <CardDP1 />
            </div>
            <div className="col-12 col-lg-6">
              <CardDP2 />
            </div>
          </div>
        </div>

  );
};
export default Duplex;