import React from 'react';
import img from '../../../assets/images/modelos-renders/sp-c2.webp'
import plano from '../../../assets/images/modelos-planos/60m2-3525-plano.webp'
import CardModel from '../CardModel';

export const CardC2 = () => {


    const modelName = 'C2';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '60 m²' },
      { icon: 'fas fa-bed', text: '2 Habitaciones' },
      { icon: 'fas fa-bath', text: '1 Baño' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-car', text: 'Pérgola' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;


}

