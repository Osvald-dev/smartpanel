import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaArrowUp } from 'react-icons/fa';
import './footer.css'

export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
                            <Link><a href="#Quienessomos" className="text-white">¿Quiénes Somos?</a></Link>
                        </li>
                        <li>
                            <Link to='/preguntas'><a href="#preguntas" className="text-white">Preguntas Frecuentes</a></Link>
                        </li>
                        <li>
                            <Link><a href="#detalles" className="text-white">Detalles Constructivos</a></Link>
                        </li>
                        <li>
                            <Link><a href="#comentarios" className="text-white">Comentarios</a></Link>
                        </li>
                        <li>
                            <Link to='/modelos/doshabitaciones'><a href="#comentarios" className="text-white">Modelos</a></Link>
                        </li>
                    </ul>
                </div>

                <div className="redes-footer">
                    <div className="footer-social-icons">
                        <a href="https://www.instagram.com/" className='icon-size'>
                            <FaInstagram className="text-white" />
                        </a>
                        <a href="https://www.facebook.com/" className='icon-size'>
                            <FaFacebook className="text-white" />
                        </a>
                    </div>
                </div>


            </div>
            <div className="whatsapp-icon">
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
