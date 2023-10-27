import React, {useState} from 'react';
import img6 from '../../../assets/images/modelos-renders/sp-dp2.webp'
import plano from '../../../assets/images/modelos-planos/94-m2-7519-plano-pa.webp'
import plano1 from '../../../assets/images/modelos-planos/94-m2-7519-plano-pb.webp'
import { generateRandomPhoneNumber } from '../../../utils/whatsapp';
import '../card.css';
import { Carousel } from 'react-bootstrap';
export const CardDP2 = () => {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const handleWhatsAppAction = () => {
        const phoneNumber = generateRandomPhoneNumber();
        const whatsappLink = `https://wa.me/${phoneNumber}`;
        window.open(whatsappLink, '_blank'); // Abre en una nueva pestaña
    };
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="container-full bg-modelo">


            <div className="carousel-models">

                <Carousel touch={true} id="carouselExample" className="carousel slide" activeIndex={index}
                    onSelect={handleSelect}
                    interval={null} 
                    pause={isPaused} >
                    <Carousel.Item>
                        <div className="card">
                            <img src={img6} className="card-img-top img-cards" alt="..." />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card">
                            <img src={plano} className="card-img-top img-cards plano-image" alt="..." />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card">
                            <img src={plano1} className="card-img-top img-cards plano-image" alt="..." />
                        </div>
                    </Carousel.Item>
                </Carousel>

            </div>
            <div className="row">
                <h2 className='name-model'> DP2</h2>
                <ul className="list-group">
                    <li className="list-group-item"><i className="fas fa-ruler"></i> 94 mt2</li>
                    <li className="list-group-item"><i className="fas fa-bed"></i> 2 habitaciones</li>
                    <li className="list-group-item"><i className="fas fa-bath"></i> 2 Baños</li>
                    <li className="list-group-item"><i className="fas fa-cutlery"></i> Cocina - Comedor </li>
                    <li className="list-group-item"><i className="fas fa-home"></i> Galería</li>
                </ul>
            </div>
            <div className="text-center info">
                <button
                    className="btn btn-success"
                    onClick={handleWhatsAppAction}
                >
                    Más información
                </button>
            </div>
        </div>

    );
}

