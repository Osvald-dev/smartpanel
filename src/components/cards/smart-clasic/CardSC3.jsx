import React from 'react';
import img from '../../../assets/images/modelos-renders/render-scC.jpg'
import plano from '../../../assets/images/modelos-planos/plano-scC.jpg'
import CardModel from '../CardModel';

export const CardSC3 = () => {


    const modelName = 'Clasic C';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '83 m²' },
      { icon: 'fas fa-bed', text: '3 Habitaciones' },
      { icon: 'fas fa-bath', text: '2 Baños' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-car', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;


}


