import React from 'react'
import logo from '../../assets/logo/Logo-Completo-Color.png'
import plano from '../../assets/images/modelos-planos/100m2-7525-plano.webp'
import './plano.css'

export const Houseplane = () => {
    return (
        <div>
            <div className="container my-5 envio-plano">
                <div className="text-center mb-4">
                    <h2>¿Ya tenés el plano de tu Casa?</h2>
                    <div className='imagenes-plano'>
                        <img className='img-plano' src={logo} alt="Smart Panel Logo Logotipo Empresa Construccion woodframe llaveenmano" />
                        <img className='img-plano' src={plano} alt="planos woodframe casa house woodframe foryou" />
                    </div>

                    <p className='p-pdf'>Envíanos en formato pdf el plano y nos pondremos en contacto a la brevedad</p>
                </div>

                <div className="card bg-image">
                    <div className="card-body">
                        <input type="file" className="form-control mb-3" accept=".pdf" />
                        <button className="btn btn-primary-plano">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
