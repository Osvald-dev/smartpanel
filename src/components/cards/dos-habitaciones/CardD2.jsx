import React from 'react';
import img from '../../../assets/images/modelos-renders/sp-d2.webp'
import plano from '../../../assets/images/modelos-planos/81m2-5427-plano.webp'
import CardModel from '../CardModel';

export const CardD2 = () => {


    const modelName = 'D2';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '81 m²' },
      { icon: 'fas fa-bed', text: '2 Habitaciones' },
      { icon: 'fas fa-bath', text: '1 Baño' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-car', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;


}