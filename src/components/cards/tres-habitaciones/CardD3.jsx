import React, { useState } from 'react';
import img2 from '../../../assets/images/modelos-renders/sp-d3.webp'
import plano from '../../../assets/images/modelos-planos/73-plano.webp'
import { generateRandomPhoneNumber } from '../../../utils/whatsapp';
import '../card.css';
import { Carousel } from 'react-bootstrap';

export const CardD3 = () => {
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
                    pause={isPaused}>
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
                <h2 className='name-model'> D3</h2>
                <ul className="list-group">
                    <li className="list-group-item"><i className="fas fa-ruler"></i> 73 mt2</li>
                    <li className="list-group-item"><i className="fas fa-bed"></i> 3 habitaciones</li>
                    <li className="list-group-item"><i className="fas fa-bath"></i> 2 Baños</li>
                    <li className="list-group-item"><i className="fas fa-cutlery"></i> Cocina - Comedor </li>
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
