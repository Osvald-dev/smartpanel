import React, {useState} from 'react';
import img6 from '../../../assets/images/modelos-renders/sp-dp2.webp';
import plano from '../../../assets/images/modelos-planos/94-m2-7519-plano-pa.webp';
import plano1 from '../../../assets/images/modelos-planos/94-m2-7519-plano-pb.webp';
import CardModel from '../CardModel';

export const CardDP2 = () => {
    const modelName = 'DP2';
    const images = [img6, plano, plano1];
    const details = [
      { icon: 'fas fa-ruler', text: '94 m²' },
      { icon: 'fas fa-bed', text: '2 Habitaciones' },
      { icon: 'fas fa-bath', text: '2 Baños' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-home', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;
  };
