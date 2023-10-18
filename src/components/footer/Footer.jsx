import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaArrowUp } from 'react-icons/fa';
import { generateRandomPhoneNumber } from '../../utils/whatsapp';
import './footer.css'

export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleWhatsAppAction = () => {
        const phoneNumber = generateRandomPhoneNumber();
        const whatsappLink = `https://wa.me/${phoneNumber}`;
        window.open(whatsappLink, '_blank'); // Abre en una nueva pestaña
    };

    return (
        <footer className="bg-dark text-white py-4">
            <div className='footer'>

                <div className="flecha">
                    <div className="footer-scroll-to-top" onClick={scrollToTop}>
                        <FaArrowUp className="text-white" />
                    </div>
                </div>


                <div className="links">
                    <ul className="list-unstyled">
                        <li>
                            <Link to="#Quienessomos" className="text-white">¿Quiénes Somos?</Link>
                        </li>
                        <li>
                            <Link to="/preguntas" className="text-white">Preguntas Frecuentes</Link>
                        </li>
                        <li>
                            <Link to="#detalles" className="text-white">Detalles Constructivos</Link>
                        </li>
                        <li>
                            <Link to="#comentarios" className="text-white">Comentarios</Link>
                        </li>
                        <li>
                            <Link to="/modelos/doshabitaciones" className="text-white">Modelos</Link>
                        </li>
                    </ul>
                </div>


                <div className="redes-footer">
                    <div className="footer-social-icons">
                        <a href="https://www.instagram.com/smartpanelcba/" className='icon-size'>
                            <FaInstagram className="text-white" />
                        </a>
                        <a href="https://www.facebook.com/smartpanelcba" className='icon-size'>
                            <FaFacebook className="text-white" />
                        </a>
                    </div>
                </div>


            </div>
            <div className="whatsapp-icon" onClick={handleWhatsAppAction}>
                <a
                    href="https://api.whatsapp.com/send?phone=TUNUMERO"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-whatsapp"></i>
                </a>
            </div>
        </footer>
    );

}
