import React, { useState } from 'react';
import { generateRandomPhoneNumber } from '../../utils/whatsapp.js';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FaRuler, FaBed, FaBath, FaUtensils, FaCar, FaHouse, FaUmbrella, FaDungeon } from 'react-icons/fa6';
import './card.css';

// Los CardXX pasan el ícono como clase de Font Awesome; se mapea a react-icons.
const ICONS = {
  'fas fa-ruler': FaRuler,
  'fas fa-bed': FaBed,
  'fas fa-bath': FaBath,
  'fas fa-cutlery': FaUtensils,
  'fas fa-car': FaCar,
  'fas fa-home': FaHouse,
  'fas fa-umbrella': FaUmbrella,
  'fas fa-dungeon': FaDungeon,
};

const CardModel = ({ modelName, images, details }) => {
  const [index, setIndex] = useState(0);

  const handleWhatsAppAction = () => {
    const phoneNumber = generateRandomPhoneNumber();
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, '_blank');
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-full bg-modelo">
      <div className="carousel-models">
        <Carousel
          touch={true}
          id="carouselExample"
          className="carousel slide"
          activeIndex={index}
          onSelect={handleSelect}
          interval={null}
        >
          {images.map((image, i) => (
            <Carousel.Item key={i}>
              <div className="card">
                <img src={image} className="card-img-top img-cards" alt={`Modelo ${modelName}`} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="row">
        <h2 className="name-model">{modelName}</h2>
        <ul className="list-group">
          {details.map((detail, i) => {
            const Icon = ICONS[detail.icon];
            return (
              <li key={i} className="list-group-item">
                {Icon && <Icon className="icon-accent" />} {detail.text}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="text-center info">
        <button className="btn btn-success" onClick={handleWhatsAppAction}>
          COTIZAR MODELO
        </button>
      </div>
    </div>
  );
};

CardModel.propTypes = {
  modelName: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardModel;
