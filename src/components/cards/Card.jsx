import React from 'react';

const Card = ({ images, title, features }) => {
  return (
    <div className="container-mb bg-modelo">
      <div id={`carousel${title}`} className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="card">
                <img src={image} className="card-img-top img-cards" alt="..." />
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${title}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#carousel${title}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="text-center mb-4">
        <h2 className='name-model'>{title}</h2>
        <ul className="list-group">
          {features.map((feature, index) => (
            <li key={index} className="list-group-item">
              <i className={feature.icon}></i> {feature.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
