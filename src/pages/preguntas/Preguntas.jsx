import React from 'react'
import './preguntas.css'
import logo from '../../assets/logo/logo-web.png'
import { Link } from 'react-router-dom';

import { generateRandomPhoneNumber } from '../../utils/whatsapp';

export const Preguntas = () => {

    const handleWhatsAppAction = () => {
        const phoneNumber = generateRandomPhoneNumber();
        const whatsappLink = `https://wa.me/${phoneNumber}`;
        window.open(whatsappLink, '_blank'); // Abre en una nueva pestaña
    };


    return (
        <div className='bg-preguntas'>
            <nav className="navbar">
                <Link to='/'>
                    <img src={logo} alt='Logo' className='navbar-logo' />
                </Link>

                <div >
                    <Link to='/' id="inicio">
                    <button className="navbar-button arrow">
                        <i className="fas fa-arrow-up"></i>
                    </button>
                    </Link>
                </div>
                <div >
                    <button className="navbar-button whats" onClick={handleWhatsAppAction}>
                        <i className="fab fa-whatsapp"></i>
                    </button>
                </div>

            </nav>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Tipo de construcción
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                            <strong>¿Qué tipo de construcción realizamos?</strong><p>En Smart-Panel, nos especializamos en la construcción con el innovador y eficiente sistema de construcción en seco conocido como WoodFrame. Este método, de origen americano, es una técnica constructiva que se basa en la utilización de estructuras de madera sólida y ligera para erigir edificaciones de forma rápida y eficiente.</p>
                            <strong>Caracteristicas destacadas del sistema WoodFrame</strong>
                            <ol className="list-group-2 list-group-numbered">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Eficiencia y Velocidad</div>
                                        <p> El sistema WoodFrame nos permite acelerar el proceso constructivo considerablemente en comparación con métodos tradicionales. La madera es un material ligero y fácil de trabajar, lo que contribuye a tiempos de construcción más cortos y, en última instancia, a la posibilidad de que nuestros clientes se conviertan en propietarios en un plazo aproximado de 30 días.</p>
                                    </div>
                                    <span className="badge bg-dark rounded-pill">30 Días</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Sostenibilidad</div>
                                        <p>La madera utilizada en el sistema WoodFrame es un recurso renovable, y su producción y uso en la construcción contribuyen a la reducción de la huella de carbono. Nos preocupamos por el medio ambiente y buscamos promover prácticas de construcción sostenibles en cada proyecto que emprendemos.</p>
                                    </div>
                                    <span className="badge bg-dark rounded-pill">Ecológico</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Flexibilidad y Diseño Personalizado</div>
                                        <p>Flexibilidad y Diseño Personalizado: La versatilidad del sistema WoodFrame nos permite adaptarnos a una amplia gama de diseños arquitectónicos y estilos. Trabajamos en estrecha colaboración con nuestros clientes para diseñar y construir espacios que se ajusten a sus necesidades, preferencias y estilo de vida, brindando un nivel excepcional de personalización en cada proyecto.</p>
                                    </div>
                                    <span className="badge bg-dark rounded-pill">Diseño</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Forma de pago
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <strong>¿Cúal es la forma de pago?</strong>
                            <p>Comprendemos claramente la importancia de proporcionar flexibilidad y transparencia en la forma de pago, y más en la situación que atravezamos, para que nuestros clientes puedan planificar su inversión de manera cómoda y efectiva. Nuestro proceso de pagos se estructura en varias etapas clave del proyecto:</p>
                            <ol className="list-group-2 list-group-numbered">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Reserva y Preparación Inicial (10%)</div>
                                        <p>Para comenzar el proceso de construcción en seco y asegurar la preparación adecuada de materiales y estructuras, requerimos un pago inicial del 10% del costo total del proyecto. Este pago sirve como señal para iniciar la coordinación de medidas y la organización de los materiales necesarios. Además, es importante mencionar que ofrecemos la <b>bonificación del flete</b>  hasta 700 km, asegurando así una ventaja adicional para nuestros clientes.</p>
                                    </div>
                                    <span className="badge bg-dark rounded-pill">10%</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Nivelación del Terreno y Platea (25%)</div>
                                        <p>Una vez que nuestros constructores llegan al lugar y evalúan la necesidad de nivelar el terreno, se procede a crear una base sólida para la casa, conocida como platea. En este punto, se realiza un segundo pago correspondiente al 25% del costo total del proyecto. Este paso es crucial para garantizar una base estable y adecuada sobre la cual se montará la estructura de construcción en seco.</p>
                                    </div>
                                    <span className="badge bg-dark rounded-pill">25%</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Finalización de la Construcción (65%)</div>
                                        <p>Al comenzar la construcción se procede al pago final del 65% restante. Este pago incluye la entrega de los documentos pertinentes y la llave de la casa, marcando así el cierre exitoso del sueño de un hogar propio.</p>
                                    </div>
                                    <span className="badge bg-dark rounded-pill">65%</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            En donde nos encontramos
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <strong>¿De dónde somos? ¿A donde trabajamos?</strong>
                            <p>Smart-Panel lleva a cabo proyectos de construcción en todo el territorio nacional de Argentina. Nuestra empresa tiene sus raíces en la hermosa provincia de Córdoba, ubicada en el corazón del país.</p>
                            <ol className="list-group-2 list-group-numbered">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Sede Central en Córdoba, Argentina</div>
                                        <p>Nuestra sede central está estratégicamente ubicada en la ciudad de Córdoba, Argentina. Aquí es donde se coordina y planifica cada proyecto, y donde puedes encontrarnos para discutir tus ideas y necesidades. A continuación, te brindamos la dirección de nuestras oficinas para que nos puedas visitar:

                                            Dirección:
                                            Av. Rafael Nuñez 3816 (oficina comercial) B° Cerro de las Rosas <br /> Calle Calingasta 5257 (Nuestra Fábrica) B° Deán Funes </p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Área de Cobertura Nacional</div>
                                        <p>A pesar de que nuestras oficinas están en Córdoba, nuestra dedicación y alcance no conocen límites geográficos. Trabajamos en todo el país, abarcando diferentes regiones y localidades. Ya sea en el norte, sur, este u oeste, estamos dispuestos y listos para llevar a cabo tu proyecto de construcción en seco con la excelencia y el compromiso que nos caracterizan.

                                            Estamos aquí para transformar tus ideas en una realidad tangible, sin importar dónde te encuentres en Argentina. Si deseas obtener más información sobre nuestra presencia y servicios en tu región o si tienes preguntas adicionales, no dudes en llamarnos .</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
