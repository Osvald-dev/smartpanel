import React from 'react';
import img from '../../../assets/images/modelos-renders/sp-g2.webp'
import plano from '../../../assets/images/modelos-planos/81m2-5526-galeria-plano.webp'
import CardModel from '../CardModel';

export const CardG2 = () => {


    const modelName = 'G2';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '81 m²' },
      { icon: 'fas fa-bed', text: '2 Habitaciones - posibilidad de 3' },
      { icon: 'fas fa-bath', text: '1 Baño' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-car', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;


}
         
     