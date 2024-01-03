import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import videoSrc from '../../assets/images/video-nosotros.mp4';
import './texto.css';

export const Texto = () => {
    return (
        <div className='texto-home' id='quienes-somos'>
            <div className='contenedor-texto'>
                <div className='texto-div'>
                    <div className='h1-div'>
                        <div className='opacity'>
                            <h1 className='h1-somos'>SOMOS ESPECIALISTAS EN WOODFRAME</h1>
                            <Link to='/'>
                                <div className='arrow-icon'>
                                    <i className='fas fa-arrow-up'></i>
                                </div>
                            </Link>
                        </div>
                        <div className='card-container'>
                            <div className='video-container'>
                                <video className='video' autoPlay loop muted>
                                    <source src={videoSrc} type='video/mp4' />
                                    Tu navegador no soporta el elemento de video.
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg'>
                        <FadeInParagraph>
                            <strong>¡Bienvenidos a SmartPanel!</strong>
                            <br />
                            Somos un equipo de apasionados profesionales especializados en la vanguardia de la construcción en seco, centrándonos en el eficiente y moderno sistema americano <strong>WoodFrame</strong>. Estamos aquí para transformar tus proyectos en realidad de forma ágil y eficaz.
                        </FadeInParagraph>
                        <FadeInParagraph>
                            Nos enorgullecemos de nuestra especialización en el sistema <strong>WoodFrame</strong>, una metodología innovadora que se destaca por su eficiencia y rapidez en el proceso constructivo. Este enfoque nos permite acelerar la culminación de tu proyecto y ofrecerte la oportunidad de convertirte en propietario de tu nuevo espacio en tan solo 30 días.
                        </FadeInParagraph>
                        <FadeInParagraph>
                            Trabajamos contigo para entender tus necesidades y objetivos, diseñando soluciones a medida que superen tus expectativas.
                        </FadeInParagraph>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FadeInParagraph = ({ children }) => {
    const paragraphRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const paragraph = paragraphRef.current;
        if (paragraph) {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            });

            observer.observe(paragraph);

            return () => {
                observer.disconnect();
            };
        }
    }, []);

    return <p ref={paragraphRef} className={`lead ${isVisible ? 'fade-in' : ''}`}>{children}</p>;
};
