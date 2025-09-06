import React from "react";
import './preguntas.css';
import { generateRandomPhoneNumber } from '../../utils/whatsapp';

export const PreguntasHome = () => {

    const handleWhatsAppAction = () => {
        const phoneNumber = generateRandomPhoneNumber();
        const whatsappLink = `https://wa.me/${phoneNumber}`;
        window.open(whatsappLink, '_blank');
    };

    return (
        <section className="preguntas-home" id="preguntas-frecuentes">
            <div className="container">
                <h2 className="title-preguntas">Preguntas Frecuentes</h2>
                <p className="subtitle-preguntas">
                    Todo lo que necesitás saber sobre nuestra <strong>construcción en seco WoodFrame</strong>.
                </p>

                <div className="accordion" id="faqAccordion">

                    {/* Pregunta 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true">
                                Tipo de Construcción
                            </button>
                        </h2>
                        <div id="faq1" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                <p><strong>¿Qué tipo de construcción realizamos?</strong></p>
                                <p>
                                    En <strong>SmartPanel</strong> realizamos construcciones con el sistema <strong>WoodFrame</strong>, 
                                    utilizando <strong>estructuras de madera maciza bilaminada</strong> y materiales de 
                                    <strong> alta calidad bajo normas de construcción</strong>. 
                                </p>
                                <p>
                                    Nuestros muros son aislados tanto por dentro como por fuera mediante el 
                                    <strong> sistema EIFS</strong> (placas EPS de alta densidad con malla de fibra de vidrio y 
                                    revoque fino <em>(Base Coat)</em>), logrando un aislamiento térmico y acústico superior.
                                </p>
                                <p>
                                    Ofrecemos dos servicios constructivos principales:
                                </p>
                                <ul className="list-faq">
                                    <li>
                                        <strong>Obra gris:</strong> La más completa del país. No entregamos una estructura desnuda, 
                                        sino una vivienda con muros aislados mediante EIFS, con <strong>Base Coat y revestimiento 
                                        plástico color a elección</strong>. Así, solo te preocupás por las terminaciones interiores.
                                    </li>
                                    <li>
                                        <strong>Línea llave en mano:</strong> Una solución integral y de lujo. Te entregamos la 
                                        vivienda completamente terminada; solo necesitás realizar las <strong>conexiones de agua, luz y gas 
                                        a la red local</strong>.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Pregunta 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false">
                                Forma de Pago
                            </button>
                        </h2>
                        <div id="faq2" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <p><strong>¿Cómo se realiza el pago?</strong></p>
                                <p>
                                    En SmartPanel ofrecemos planes de pago claros y transparentes, que varían según 
                                    el servicio elegido:
                                </p>

                                <h5 className="faq-subtitle">🔹 Obra gris</h5>
                                <ul className="list-faq">
                                    <li><strong>10%</strong> Reserva inicial para iniciar el contrato y congelar el precio.</li>
                                    <li><strong>25%</strong> Nivelación del terreno y platea (materiales y mano de obra).</li>
                                    <li><strong>65%</strong> Finalización de la construcción y entrega de la vivienda.</li>
                                </ul>

                                <h5 className="faq-subtitle">🔹 Llave en mano</h5>
                                <ul className="list-faq">
                                    <li><strong>10%</strong> Reserva inicial y congelamiento de precio (firma de contrato).</li>
                                    <li><strong>25%</strong> Nivelación del terreno y platea.</li>
                                    <li><strong>50%</strong> Descarga de la vivienda y montaje de estructura, aberturas y cañerías.</li>
                                    <li><strong>15%</strong> Etapa final: colocación de pisos, pintura interior, sanitarios, grifería y últimos detalles.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Pregunta 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false">
                                Ubicación y Cobertura
                            </button>
                        </h2>
                        <div id="faq3" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <p><strong>¿Dónde trabajamos?</strong></p>
                                <p>
                                    Nuestra <strong>sede central está en Córdoba Capital</strong>, donde contamos con oficinas comerciales y fábrica propia.  
                                    Desde aquí coordinamos proyectos en <strong>todo el territorio nacional</strong>.
                                </p>
                                <p>
                                    Ya sea en el norte, sur, este u oeste de Argentina, podemos llevar tu proyecto de construcción 
                                    en seco WoodFrame con la misma calidad, compromiso y rapidez que nos caracteriza.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

      
            </div>
        </section>
    );
};
