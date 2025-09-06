import img from '../../../assets/images/modelos-renders/ai6.webp'
import plano from '../../../assets/images/modelos-planos/ai6p.webp'
import CardModel from '../CardModel';

export const CardAI6 = () => {


    const modelName = 'Smart AI - 6';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '130 m²' },
      { icon: 'fas fa-bed', text: '3 Habitaciones' },
      { icon: 'fas fa-bath', text: '2 Baños' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-car', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;


}