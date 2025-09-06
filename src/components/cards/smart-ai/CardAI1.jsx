import img from '../../../assets/images/modelos-renders/ai1.webp'
import plano from '../../../assets/images/modelos-planos/ai1p.webp'
import CardModel from '../CardModel';

export const CardAI1 = () => {


    const modelName = 'Smart AI - 1';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '65 m²' },
      { icon: 'fas fa-bed', text: '1 Habitaciones' },
      { icon: 'fas fa-bath', text: '1 Baños' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
      { icon: 'fas fa-car', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;


}