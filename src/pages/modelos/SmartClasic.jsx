import React from 'react';
import './modelos.css';
import { CardSC1 } from '../../components/cards/smart-clasic/CardSC1';
import { CardSC2 } from '../../components/cards/smart-clasic/CardSC2';
import { CardSC3 } from '../../components/cards/smart-clasic/CardSC3';
import { CardSC4 } from '../../components/cards/smart-clasic/CardSC4';

export const SmartClasic = () => {
  return (
    <div className="container-full bg-modelo">
    <div className="section-title-container">
    <h2 className="section-title"> Smart - Clasic </h2>
  </div>
      <div className="bg-cards row">
        <div className="col-12 col-lg-6">
          <CardSC1 />
        </div>
        <div className="col-12 col-lg-6">
          <CardSC2 />
        </div>
        <div className="col-12 col-lg-6">
          <CardSC3 />
        </div>
        <div className="col-12 col-lg-6">
          <CardSC4 />
        </div>
      </div>
    </div>
  )
}
