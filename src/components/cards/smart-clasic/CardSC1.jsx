import React from 'react';
import img from '../../../assets/images/modelos-renders/c-a.webp'
import plano from '../../../assets/images/modelos-planos/planoweb-ca.webp'
import CardModel from '../CardModel';

export const CardSC1 = () => {


    const modelName = 'Clasic A';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '154 m²' },
      { icon: 'fas fa-bed', text: '5 Habitaciones' },
      { icon: 'fas fa-bath', text: '2 Baños' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-car', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;


}
    

