import React from 'react';
import img from '../../../assets/images/modelos-renders/c-b.webp'
import plano from '../../../assets/images/modelos-planos/planoweb-cb.webp'
import CardModel from '../CardModel';

export const CardSC2 = () => {


    const modelName = 'Clasic B';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '85 m²' },
      { icon: 'fas fa-bed', text: '3 Habitaciones' },
      { icon: 'fas fa-bath', text: '2 Baños' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-car', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;


}
    


