import React from 'react';
import CardModel from '../CardModel';
import img from '../../../assets/images/modelos-renders/sp-d3.webp'
import plano from '../../../assets/images/modelos-planos/73-plano.webp'

export const CardD3 = () => {
    

    const modelName = 'D3';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '73 m²' },
      { icon: 'fas fa-bed', text: '3 Habitaciones' },
      { icon: 'fas fa-bath', text: '2 Baños' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
  
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;

}