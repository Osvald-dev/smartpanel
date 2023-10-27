import React from 'react'
import './texto.css'
import camion from '../../assets/images/camion.jpg'
import taller1 from '../../assets/images/taller1.jpg'
import taller2 from '../../assets/images/taller2.jpg'
import platea from '../../assets/images/vcp.png'
import casa from '../../assets/images/casa-roja.jpg'
import { Link } from 'react-router-dom'

export const Texto = () => {

    return (
        <div className='texto-home ' id="quienes-somos" >
            <div className="contenedor-texto">
                <div className="texto-div">
                    <div className='h1-div' >
                        <div className='opacity' >
                            <h1 className='h1-somos' >SOMOS ESPECIALISTAS EN WOODFRAME</h1>
                            <Link to='/'  >
                                <div className='arrow-icon'>
                                    <i className='fas fa-arrow-up'></i>
                                </div>
                            </Link>

                        </div>
                        <div className='img-smart'>

                        </div>
                    </div>
                    <div className="col-lg">
                        <p className="lead">¡ Bienvenidos a SmartPanel ! <br /> Somos un equipo de apasionados profesionales especializados en la vanguardia de la construcción en seco, centrándonos en el eficiente y moderno sistema americano WoodFrame. Estamos aquí para transformar tus proyectos en realidad de forma ágil y eficaz.</p>
                        <p className='lead'>Nos enorgullecemos de nuestra especialización en el sistema WoodFrame, una metodología innovadora que se destaca por su eficiencia y rapidez en el proceso constructivo. Este enfoque nos permite acelerar la culminación de tu proyecto y ofrecerte la oportunidad de convertirte en propietario de tu nuevo espacio en tan solo 30 días.</p>
                        <p className='lead'>Nuestro compromiso no se limita a la rapidez; valoramos la calidad, la precisión y la durabilidad en cada etapa de la construcción. Trabajamos mano a mano contigo para entender tus necesidades y objetivos, diseñando soluciones a medida que superen tus expectativas.</p>
                        <div className="card-container">
                       
                            <div className="card-set">
                                <img src={taller1} alt="construcción en seco San José Entre Ríos Woodframe" className="card-image-set" />
                            </div>
                           
                            <div className="card-set">
                                <img src={taller2} alt="construcción en seco Santa Fe Woodframe" className="card-image-set" />
                            </div>

                            <div className="card-set">
                                <img src={camion} alt="construcción en seco Bialet Mase Córdoba Woodframe" className="card-image-set" />
                            </div>
                            
                            <div className="card-set">
                                <img src={platea} alt="construcción en seco Santa Fe Woodframe" className="card-image-set" />
                            </div>
                            
                            <div className="card-set">
                                <img src={casa} alt="construcción en seco Santa Fe Woodframe" className="card-image-set" />
                            </div>
                        </div>


                    </div>

                </div>
            </div>
</div>
    )
}
