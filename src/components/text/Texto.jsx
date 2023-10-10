import React from 'react'
import './texto.css'
import imagen1 from '../../assets/images/imagen1.png'

export const Texto = () => {
    return (
        <div className='texto-home'>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 >Construimos tu casa a medida y en todo el País</h1>
                        <p className="lead">Bienvenidos a SmartPanel, un equipo de apasionados profesionales especializados en la vanguardia de la construcción en seco, centrándonos en el eficiente y moderno sistema americano WoodFrame. Estamos aquí para transformar tus proyectos en realidad de forma ágil y eficaz.</p>
                        <p>Nos enorgullecemos de nuestra especialización en el sistema WoodFrame, una metodología innovadora que se destaca por su eficiencia y rapidez en el proceso constructivo. Este enfoque nos permite acelerar la culminación de tu proyecto y ofrecerte la oportunidad de convertirte en propietario de tu nuevo espacio en tan solo 30 días.</p>
                        <p><em>Nuestro compromiso no se limita a la rapidez; valoramos la calidad, la precisión y la durabilidad en cada etapa de la construcción. Trabajamos mano a mano contigo para entender tus necesidades y objetivos, diseñando soluciones a medida que superen tus expectativas.</em></p>
                    </div>
                    <div className="col-lg-6">
                        <img src={imagen1} className="img-fluid" alt="construccion woodframe" />
                    </div>
                </div>
            </div>

        </div>
    )
}
