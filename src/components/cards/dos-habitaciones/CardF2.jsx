import React, {useState} from 'react';
import img2 from '../../../assets/images/modelos-renders/sp-f2.webp'
import plano from '../../../assets/images/modelos-planos/84m2-6618-plano.webp'
import { generateRandomPhoneNumber } from '../../../utils/whatsapp.js'
import { Carousel } from 'react-bootstrap';
import '../card.css';

export const CardF2 = () => {
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
                            <img src={img2} className="card-img-top img-cards" alt="..." />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card">
                            <img src={plano} className="card-img-top img-cards plano-image" alt="..." />
                        </div>
                    </Carousel.Item>
                </Carousel>

            </div>

            <div className="row">
                <h2 className='name-model'> F2</h2>
                <ul className="list-group">
                    <li className="list-group-item"><i className="fas fa-ruler"></i> 84 m²</li>
                    <li className="list-group-item"><i className="fas fa-bed"></i> 2 habitaciones</li>
                    <li className="list-group-item"><i className="fas fa-bath"></i> 1 Baño</li>
                    <li className="list-group-item"><i className="fas fa-cutlery"></i> Cocina - Comedor </li>
                    <li className="list-group-item"><i className="fas fa-car"></i> Galeria </li>
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
