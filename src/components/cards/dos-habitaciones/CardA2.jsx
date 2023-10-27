import React, {useState} from 'react';
import { generateRandomPhoneNumber } from '../../../utils/whatsapp.js'
import { Carousel } from 'react-bootstrap';

import img1 from '../../../assets/images/modelos-renders/sp-a2.webp'
import plano601 from '../../../assets/images/modelos-planos/60m2-4317-plano.webp'
import '../card.css';

export const CardA2 = () => {
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

        <div className="container-full bg-modelo ">

            <div className="carousel-models">
                
                    <Carousel touch={true} id="carouselExample" className="carousel slide" activeIndex={index}
                    onSelect={handleSelect}
                    interval={null} 
                    pause={isPaused} >
                        <Carousel.Item>
                            <div className="card">
                                <img src={img1} className="card-img-top img-cards" alt="..." />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card">
                                <img src={plano601} className="card-img-top img-cards plano-image" alt="..." />
                            </div>
                        </Carousel.Item>
                    </Carousel>
            
            </div>
            <div className="row">
                <h2 className='name-model'> A2</h2>
                <ul className="list-group">
                    <li className="list-group-item"><i className="fas fa-ruler"></i>  60 mt2</li>
                    <li className="list-group-item"><i className="fas fa-bed"></i> 2 Habitaciones</li>
                    <li className="list-group-item"><i className="fas fa-bath"></i> 1 Baño</li>
                    <li className="list-group-item"><i className="fas fa-cutlery"></i> Cocina - Comedor </li>
                    <li className="list-group-item"><i className="fas fa-car"></i>  Galeria </li>

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

