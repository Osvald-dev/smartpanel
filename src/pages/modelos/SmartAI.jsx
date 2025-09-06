import React from 'react';
import './modelos.css';
import { CardAI1 } from '../../components/cards/smart-ai/CardAI1';
import { CardAI2 } from '../../components/cards/smart-ai/CardAI2';
import { CardAI3 } from '../../components/cards/smart-ai/CardAI3';
import { CardAI4 } from '../../components/cards/smart-ai/CardAI4';
import { CardAI5 } from '../../components/cards/smart-ai/CardAI5';
import { CardAI6 } from '../../components/cards/smart-ai/CardAI6';

export const SmartAI = () => {
  return (
    <div className="container-full bg-modelo">
    <div className="section-title-container">
    <h2 className="section-title"> Smart - AI </h2>
  </div>
      <div className="bg-cards row">
        <div className="col-12 col-lg-6">
          <CardAI1/>
        </div>
        <div className="col-12 col-lg-6">
          <CardAI2 />
        </div>
        <div className="col-12 col-lg-6">
          <CardAI3 />
        </div>
        <div className="col-12 col-lg-6">
          <CardAI4 />
        </div>
        <div className="col-12 col-lg-6">
          <CardAI5 />
        </div>
        <div className="col-12 col-lg-6">
          <CardAI6 />
        </div>
      </div>
    </div>
  )
}
