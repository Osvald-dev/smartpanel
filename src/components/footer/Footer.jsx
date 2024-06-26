import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {generateRandomPhoneNumber} from '../../utils/whatsapp.js'
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
                            <Link to="quienes-somos" className="text-white">¿Quiénes Somos?</Link>
                        </li>
                        <li>
                            <Link to="/preguntas" className="text-white">Preguntas Frecuentes</Link>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={downloadDetailsConstructivosPDFs}
                                className="text-white"
                            >
                                Detalles Constructivos
                            </a>
                        </li>

                        <li>
                            <Link to="/modelos/doshabitaciones" className="text-white">Modelos</Link>
                        </li>
                        <li>
                            <Link to="/modelos/smartclasic" className="text-white">Smart-Clasic</Link>
                        </li>
                    </ul>
                </div>


             
                <div className="whatsapp-icon" onClick={handleWhatsAppAction}>
                  <a href="https://api.whatsapp.com/send?phone=TUNUMERO" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </div>

            </div>
       
        </footer>
    );

}
