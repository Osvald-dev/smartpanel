import React from 'react';
import img from '../../../assets/images/modelos-renders/c-d.webp'
import plano from '../../../assets/images/modelos-planos/planoweb-cd.webp'
import CardModel from '../CardModel';

export const CardSC4 = () => {


    const modelName = 'Clasic D';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '62 m²' },
      { icon: 'fas fa-bed', text: '2 Habitaciones' },
      { icon: 'fas fa-bath', text: '1 Baño' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
     
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;


}
