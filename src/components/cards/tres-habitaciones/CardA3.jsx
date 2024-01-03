import React from 'react';
import CardModel from '../CardModel';
import img from '../../../assets/images/modelos-renders/sp-a3.webp'
import plano from '../../../assets/images/modelos-planos/108m2-7335-plano.webp'

export const CardA3 = () => {
    

    const modelName = 'A3';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '108 m²' },
      { icon: 'fas fa-bed', text: '3 Habitaciones' },
      { icon: 'fas fa-bath', text: '1 Baño' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-umbrella', text: 'Pérgola' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;

  

}
  
