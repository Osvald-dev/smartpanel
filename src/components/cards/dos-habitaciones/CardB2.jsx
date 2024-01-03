import React, {useState} from 'react';
import img2 from '../../../assets/images/modelos-renders/sp-b2.webp'
import plano from '../../../assets/images/modelos-planos/106m2-7432-plano.webp'
import CardModel from '../CardModel';

export const CardB2 = () => {
  
          
    const modelName = 'B2';
    const images = [img2, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '106 m²' },
      { icon: 'fas fa-bed', text: '2 Habitaciones' },
      { icon: 'fas fa-bath', text: '2 Baños' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-car', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;
         


            
}
