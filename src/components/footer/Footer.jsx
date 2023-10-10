import React from 'react'
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
                        <li><a href="#about" className="text-white">Acerca de Nosotros</a></li>
                        <li><a href="#services" className="text-white">Nuestros Servicios</a></li>
                        <li><a href="#contact" className="text-white">Contacto</a></li>
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
