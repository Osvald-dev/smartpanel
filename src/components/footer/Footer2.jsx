import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaArrowUp } from 'react-icons/fa';
import './footer.css';

export const Footer2 = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-dark text-white py-4">

            <div className="footer">

                <div className="flecha">
                    <div className="footer-scroll-to-top" onClick={scrollToTop}>
                        <FaArrowUp className="text-white"/>
                    </div>
                </div>

                <div className="links">
                    <ul className="list-unstyled">

                        <li>
                            <Link to="/preguntas" className="text-white">
                                Preguntas Frecuentes
                            </Link>
                        </li>

                        <li>
                            <Link to="/modelos/doshabitaciones" className="text-white">
                                2 habitaciones
                            </Link>
                        </li>

                        <li>
                            <Link to="/modelos/treshabitaciones" className="text-white">
                                3 habitaciones
                            </Link>
                        </li>

                        <li>
                            <Link to="/modelos/smartclasic" className="text-white">
                                Smart-Clasic
                            </Link>
                        </li>

                        <li>
                            <Link to="/modelos/duplex" className="text-white">
                                Duplex
                            </Link>
                        </li>

                    </ul>
                </div>

                <div className="redes-footer">

                    <div className="footer-social-icons">

                        <a href="https://www.instagram.com/smartpanelcba/">
                            <FaInstagram className="text-white"/>
                        </a>

                        <a href="https://www.facebook.com/smartpanelcba">
                            <FaFacebook className="text-white"/>
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};