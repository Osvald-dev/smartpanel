import React from 'react';
import { Carousel } from 'react-bootstrap';
import render1 from '../../assets/images/modelos-renders/render2.webp';
import render2 from '../../assets/images/modelos-renders/render3.webp';
import render3 from '../../assets/images/modelos-renders/render4.webp';
import './slider.css';

export const Slider = () => {
  return (
    <div className="slider">
      <Carousel touch={true}>
        <Carousel.Item>
          <img src={render1} className="d-block w-100" alt="..." />
          <Carousel.Caption>
            <div className="text-overlay">
              <h3 className='text-inicio'>CONSTRUIMOS TU CASA EN 30 DÍAS</h3>
              <p className='p-inicio'><b>WoodFrame</b><br />Sistema americano</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={render2} className="d-block w-100" alt="..." />
          <Carousel.Caption>
            <div className="text-overlay">
              <h3 className='text-inicio'>SISTEMA DE PAGO CONTRA-ENTREGA</h3>
              <p className='p-inicio'>Inviertí en algo seguro</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={render3} className="d-block w-100" alt="..." />
          <Carousel.Caption>
            <div className="text-overlay">
              <h3 className='text-inicio'>DISEÑOS A MEDIDA</h3>
              <p className='p-inicio'>Construimos la casa que siempre soñaste</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
