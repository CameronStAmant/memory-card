import React from 'react';
import './Card.css';

function Card({ image, imageAlt, description }) {
  return (
    <div className="cards">
      <img src={image} alt={imageAlt} />
      <p>{description}</p>
    </div>
  );
}

export default Card;
