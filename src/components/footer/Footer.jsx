import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { generateRandomPhoneNumber } from '../../utils/whatsapp.js';
import logo from '../../assets/logo/logo-web.png'
import './footer.css';

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
        window.open(whatsappLink, '_blank');
    };

    const downloadPDF = (filePath, fileName) => {
        const pdfLink = document.createElement('a');
        pdfLink.href = filePath;
        pdfLink.download = fileName;
        document.body.appendChild(pdfLink);
        pdfLink.click();
        document.body.removeChild(pdfLink);
    };

    const downloadDetailsConstructivosPDFs = () => {
        downloadPDF('/pdf/FICHA TECNICA CLASICA.pdf', 'linea-clasica-smart-panel.pdf');
        downloadPDF('/pdf/FICHA TECNICA LINEA PREMIUMY.pdf', 'linea-premium-smart-panel.pdf');
    };

    return (
        <footer className="footer-modern bg-dark text-white py-5">
            <div className="container">
                <div className="row">

                    {/* Logo y Scroll */}
                    <div className="col-md-3 text-center mb-3 mb-md-0">
                        <div className="footer-logo mb-2">
                            <img src={logo} alt="SmartPanel" />
                        </div>
                        <div className="footer-scroll-to-top" onClick={scrollToTop}>
                            <FaArrowUp className="text-white" />
                        </div>
                    </div>

                    {/* Links */}
                    <div className="col-md-3 mb-3 mb-md-0">
                        <h6 className="footer-title">Enlaces</h6>
                        <ul className="list-unstyled footer-links">
                            <li><Link to="/contacto" className="text-white">Contacto</Link></li>
                            <li><Link to="/modelos/doshabitaciones" className="text-white">Modelos</Link></li>
                            <li><Link to="/modelos/smart-ai" className="text-white">Nuevos modelos AI</Link></li>
                            <li><a href="#" onClick={downloadDetailsConstructivosPDFs} className="text-white">Detalles Constructivos</a></li>
                        </ul>
                    </div>

                    {/* Ubicación */}
                    <div className="col-md-3 mb-3 mb-md-0">
                        <h6 className="footer-title">Ubicación</h6>
                        <p>Córdoba, Argentina</p>
                        <p>Oficina Comercial: Av. Rafael Nuñez 3816, B° Cerro de las Rosas</p>
                        <p>Fábrica: Calle Calingasta 5257, B° Deán Funes</p>
                    </div>

                    {/* Redes Sociales */}
                    <div className="col-md-3 text-center text-md-start">
                        <h6 className="footer-title">Redes Sociales</h6>
                        <div className="footer-social-icons">
                            <a href="https://www.instagram.com/smartpanelcba/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://www.facebook.com/smartpanelcba" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <div className="whatsapp-icon" onClick={handleWhatsAppAction}>
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="text-center mt-4">
                    <small>&copy; {new Date().getFullYear()} SmartPanel. Todos los derechos reservados.</small>
                </div>
            </div>
        </footer>
    );
}
