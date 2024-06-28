import React from 'react';
import img from '../../../assets/images/modelos-renders/I-2.webp'
import plano from '../../../assets/images/modelos-planos/PLANOWEB-I2.webp'
import CardModel from '../CardModel';

export const CardI2 = () => {


    const modelName = 'I2';
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
         