import React, {useState} from 'react';
import CardModel from '../CardModel';
import img from '../../../assets/images/modelos-renders/sp-a2.webp'
import plano from '../../../assets/images/modelos-planos/60m2-4317-plano.webp'

export const CardA2 = () => {
    

    const modelName = 'A2';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '60 m²' },
      { icon: 'fas fa-bed', text: '2 Habitaciones' },
      { icon: 'fas fa-bath', text: '1 Baño' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-car', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;

  

}