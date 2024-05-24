import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../assets/images/slide_nuevo.jpeg';
import slide2 from '../../assets/images/slide_n1.jpeg';
import slide3 from '../../assets/images/slide_n2.png';
import slide4 from '../../assets/images/slide_n3.png';
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
        
        <Carousel.Item>
          <img src={slide4} className="d-block w-100" alt="Image 4" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
