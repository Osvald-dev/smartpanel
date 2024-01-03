import React, {useState} from 'react';
import img6 from '../../../assets/images/modelos-renders/sp-dp1.webp';
import plano from '../../../assets/images/modelos-planos/141m2 -12120-plano-pa.webp';
import plano1 from '../../../assets/images/modelos-planos/141m2 -12120-plano-pb.webp';
import CardModel from '../CardModel';

export const CardDP1 = () => {
    const modelName = 'DP1';
    const images = [img6, plano, plano1];
    const details = [
      { icon: 'fas fa-ruler', text: '141 m²' },
      { icon: 'fas fa-bed', text: '3 Habitaciones' },
      { icon: 'fas fa-bath', text: '3 Baños' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-home', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;
  };