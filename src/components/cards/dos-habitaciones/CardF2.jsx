import React from 'react';
import img from '../../../assets/images/modelos-renders/sp-f2.webp'
import plano from '../../../assets/images/modelos-planos/84m2-6618-plano.webp'
import CardModel from '../CardModel';

export const CardF2 = () => {


    const modelName = 'F2';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '84 m²' },
      { icon: 'fas fa-bed', text: '2 Habitaciones' },
      { icon: 'fas fa-bath', text: '1 Baño' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-car', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;


}
         
