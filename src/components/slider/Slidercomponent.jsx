import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';
import './slider.css';

export const SliderComponent = () => {
  return (
    <div className='carousel-models carousel-container'>
      <Carousel>
        <Carousel.Item>
          <img src={slide1} className="d-block w-100" alt="Image 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide2} className="d-block w-100" alt="Image 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide3} className="d-block w-100" alt="Image 3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
