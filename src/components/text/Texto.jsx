import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './texto.css';

export const Texto = () => {
    return (
        <section className='texto-home' id='quienes-somos'>
            <div className='contenedor-texto'>
                <h1 className='h1-somos'>
                    Construcción en Seco con Sistema WoodFrame – SmartPanel
                </h1>

                <div className='columna1'>
                    <FadeInParagraph>
                        <strong>¡Bienvenidos a SmartPanel Constructora!</strong>
                        <br />
                        Somos un equipo de profesionales especializados en <strong>construcción en seco</strong> con el sistema americano <strong>WoodFrame</strong>. 
                        Acompañamos a nuestros clientes en cada etapa de su proyecto de vivienda, ofreciendo eficiencia, rapidez y calidad garantizada.
                    </FadeInParagraph>

                    <FadeInParagraph>
                        Nuestro compromiso es entregar viviendas seguras, sostenibles y personalizadas, aplicando las mejores prácticas de <strong>construcción en seco WoodFrame</strong>. 
                        Cada proyecto es único y está pensado para maximizar confort y ahorro energético.
                    </FadeInParagraph>

                    <FadeInParagraph>
                        <Link to='/contacto' className='btn-contacto'>
                            Consultanos tu proyecto
                        </Link>
                    </FadeInParagraph>
                </div>
            </div>
        </section>
    );
};

const FadeInParagraph = ({ children }) => {
    const paragraphRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const paragraph = paragraphRef.current;
        if (paragraph) {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) setIsVisible(true);
            });
            observer.observe(paragraph);
            return () => observer.disconnect();
        }
    }, []);

    return (
        <p ref={paragraphRef} className={`lead ${isVisible ? 'fade-in' : ''}`}>
            {children}
        </p>
    );
};
