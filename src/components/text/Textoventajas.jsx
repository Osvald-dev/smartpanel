import React from 'react'

export const Textoventajas = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            {/* Ventaja 1: Menor impacto ambiental */}
            <div className="text-center">
              <i className="fas fa-leaf fa-3x mb-3"></i>
              <h5>Menor impacto ambiental</h5>
              <p className='p-ventajas'>Debido al ahorro de energía tanto en la construcción como en el gasto de
                calefacción y aire acondicionado.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Ventaja 2: Seguridad */}
            <div className="text-center">
              <i className="fas fa-shield-alt fa-3x mb-3"></i>
              <h5>Seguridad</h5>
              <p className='p-ventajas'>Reforzadas para soportar diversas condiciones climáticas. Contiene membranas
                internas para reforzar.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Ventaja 3: Durabilidad */}
            <div className="text-center">
              <i className="fas fa-hard-hat fa-3x mb-3"></i>
              <h5>Durabilidad</h5>
              <p className='p-ventajas'>Con un mantenimiento adecuado como cualquier construcción, se logra maximizar
                su durabilidad</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Ventaja 4: Rapidez */}
            <div className="text-center">
              <i className="fas fa-clock fa-3x mb-3"></i>
              <h5>Rapidez</h5>
              <p className='p-ventajas'>Al ser un sistema constructivo liviano, facilita el montaje el cual es previamente
                ejecutado en obra o taller.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
