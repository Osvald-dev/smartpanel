import img from '../../../assets/images/modelos-renders/ai5.webp'
import plano from '../../../assets/images/modelos-planos/ai5p.webp'
import CardModel from '../CardModel';

export const CardAI5 = () => {


    const modelName = 'Smart AI - 5';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '91 m²' },
      { icon: 'fas fa-bed', text: '3 Habitaciones' },
      { icon: 'fas fa-bath', text: '1 Baños' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-car', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;


}