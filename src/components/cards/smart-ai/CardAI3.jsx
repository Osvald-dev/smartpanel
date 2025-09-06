import img from '../../../assets/images/modelos-renders/ai3.webp'
import plano from '../../../assets/images/modelos-planos/ai3p.webp'
import CardModel from '../CardModel';

export const CardAI3 = () => {


    const modelName = 'Smart AI - 3';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '115 m²' },
      { icon: 'fas fa-bed', text: '3 Habitaciones' },
      { icon: 'fas fa-bath', text: '2 Baños' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-car', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;


}