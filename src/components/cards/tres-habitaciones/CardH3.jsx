import React from 'react';
import CardModel from '../CardModel';
import img from '../../../assets/images/modelos-renders/H-3.webp'
import plano from '../../../assets/images/modelos-planos/PLANOWEB-H3.webp'

export const CardH3 = () => {
    

    const modelName = 'H3';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '81 m²' },
      { icon: 'fas fa-bed', text: '3 Habitaciones' },
      { icon: 'fas fa-bath', text: '1 Baño' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-home', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;

}
   