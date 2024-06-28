import React from 'react';
import img from '../../../assets/images/modelos-renders/H-2.webp'
import plano from '../../../assets/images/modelos-planos/PLANOWEB-H2.webp'
import CardModel from '../CardModel';

export const CardH2 = () => {


    const modelName = 'H2';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '60 m²' },
      { icon: 'fas fa-bed', text: '2 Habitaciones' },
      { icon: 'fas fa-bath', text: '1 Baño' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;


}
         
     