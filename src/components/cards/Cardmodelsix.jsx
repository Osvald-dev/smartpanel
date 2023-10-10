import React from 'react';
import img6 from '../../assets/images/img6.png'
import plano from '../../assets/images/plano.webp'
import './card.css';

export const Cardmodelsix = () => {
    return (
        <div className="container-mb">
            <div className="text-center mb-4">
                <h2>Nombre de modelo</h2>
                <p>Descripción del modelo</p>
            </div>

            <div id="carouselExampleFade6" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card">
                            <img src={img6} className="card-img-top img-cards" alt="..." />

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <img src={plano} className="card-img-top img-cards" alt="..." />

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade6" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade6" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="text-center mb-4">
                <h2>Modelo tal</h2>
                <ul className="list-group">
                <li className="list-group-item"><i className="fas fa-bed"></i> 4 habitaciones</li>
                    <li className="list-group-item"><i className="fas fa-ruler"></i> 600 mt2</li>
                    <li className="list-group-item"><i className="fas fa-bath"></i> 2 Baños</li>
                    <li className="list-group-item"><i className="fas fa-car"></i> Cochera / Galeria </li>
                </ul>
            </div>
            <div className="text-center">
                <button className="btn btn-primary" onClick={() => handleWhatsAppAction()}>
                    Más información
                </button>
            </div>
        </div>

    );
}


const handleWhatsAppAction = () => {
    // Aquí Lógica para asignar entre 4 números de teléfono
    window.location.href = 'https://wa.me/1234567890'; // 
};


