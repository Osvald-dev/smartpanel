import React from 'react';
import CardModel from '../CardModel';
import img from '../../../assets/images/modelos-renders/sp-b3.webp'
import plano from '../../../assets/images/modelos-planos/110m2-8822-plano.webp'

export const CardB3 = () => {
    

    const modelName = 'B3';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '110 m²' },
      { icon: 'fas fa-bed', text: '3 Habitaciones' },
      { icon: 'fas fa-bath', text: '2 Baños' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-home', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;

  

}


