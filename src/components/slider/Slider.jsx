import React from 'react'
import render1 from '../../assets/renders/render1.png'
import render2 from '../../assets/renders/render2.png'
import render3 from '../../assets/renders/render3.png'
// import render4 from '../../assets/renders/render4'
import './slider.css'

export const Slider = () => {
  return (
    <div className='slider'>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-caption d-md-block">
              <div className='text-overlay'>
                <h3>CONSTRUIMOS TU CASA EN 30 DÍAS</h3>
                <p><b>WoodFrame</b><br />Sistema americano</p>
              </div>
            </div>
            <img src={render1} className="d-block w-100" alt="..." />

          </div>
          <div className="carousel-item">
            <div className="carousel-caption d-md-block">
              <div className='text-overlay'>
                <h3>SISTEMA DE PAGO CONTRA-ENTREGA</h3>
                <p>Invertí en algo seguro</p>
              </div>
            </div>
            <img src={render2} className="d-block w-100" alt="..." />

          </div>
          <div className="carousel-item">
            <div className="carousel-caption d-md-block">
              <div className='text-overlay'>
                <h3>DISEÑOS A MEDIDA</h3>
                <p>Construimos la casa que siempre soñaste</p>
              </div>

            </div>
            <img src={render3} className="d-block w-100" alt="..." />

          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
