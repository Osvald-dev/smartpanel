import React from 'react';
import img3 from '../../assets/images/img3.png'
import plano from '../../assets/images/modelos-planos/108m2-7335-plano.jpg'
import { generateRandomPhoneNumber } from '../../utils/whatsapp';
import './card.css';

export const Cardmodelthree = () => {
    const handleWhatsAppAction = () => {
        const phoneNumber = generateRandomPhoneNumber();
        const whatsappLink = `https://wa.me/${phoneNumber}`;
        window.open(whatsappLink, '_blank'); // Abre en una nueva pestaña
    };
    return (
        <div className="container-mb bg-modelo">

            <div id="carouselExampleFade3" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card">
                            <img src={img3} className="card-img-top img-cards" alt="..." />

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <img src={plano} className="card-img-top img-cards" alt="..." />

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="text-center mb-4">
                <h2 className='name-model'>SP - A3</h2>
                <ul className="list-group">
                <li className="list-group-item"><i className="fas fa-ruler"></i> 108 mt2</li>
                    <li className="list-group-item"><i className="fas fa-bed"></i> 3 habitaciones</li>
                    <li className="list-group-item"><i className="fas fa-bath"></i> 1 Baño</li>
                    <li className="list-group-item"><i className="fas fa-cutlery"></i> Cocina - Comedor </li>
                    <li className="list-group-item"><i className="fas fa-umbrella"></i> Pérgola</li>
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


