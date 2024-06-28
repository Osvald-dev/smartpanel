import React from 'react';
import CardModel from '../CardModel';
import img from '../../../assets/images/modelos-renders/G-3.webp'
import plano from '../../../assets/images/modelos-planos/PLANOWEB-G3.webp'

export const CardG3 = () => {
    

    const modelName = 'G3';
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
   