import React from 'react';
import img from '../../../assets/images/modelos-renders/J-2.webp'
import plano from '../../../assets/images/modelos-planos/PLANOWEB-J2.webp'
import CardModel from '../CardModel';

export const CardJ2 = () => {


    const modelName = 'J2';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '60 m²' },
      { icon: 'fas fa-bed', text: '2 Habitaciones' },
      { icon: 'fas fa-bath', text: '1 Baño' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-dungeon', text: 'Galería de ingreso' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;


}