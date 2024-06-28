import React from 'react';
import img from '../../../assets/images/modelos-renders/c-c.webp'
import plano from '../../../assets/images/modelos-planos/planoweb-cc.webp'
import CardModel from '../CardModel';

export const CardSC3 = () => {


    const modelName = 'Clasic C';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '111 m²' },
      { icon: 'fas fa-bed', text: '3 Habitaciones' },
      { icon: 'fas fa-bath', text: '2 Baños' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-car', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;


}


