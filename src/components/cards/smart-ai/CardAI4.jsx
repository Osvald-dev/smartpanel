import img from '../../../assets/images/modelos-renders/ai4.webp'
import plano from '../../../assets/images/modelos-planos/ai4p.webp'
import CardModel from '../CardModel';

export const CardAI4 = () => {


    const modelName = 'Smart AI - 4';
    const images = [img, plano];
    const details = [
      { icon: 'fas fa-ruler', text: '82 m²' },
      { icon: 'fas fa-bed', text: '2 Habitaciones' },
      { icon: 'fas fa-bath', text: '1 Baño' },
      { icon: 'fas fa-cutlery', text: 'Cocina - Comedor' },
    //   { icon: 'fas fa-car', text: 'Galería' },
    ];
  
    return <CardModel modelName={modelName} images={images} details={details} />;


}