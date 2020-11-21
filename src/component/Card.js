import React from 'react';
import './Card.css';

function Card(props) {
  const clicked = () => {
    props.onClick();
    props.selected(props.index);
  };
  return (
    <div className="cards" onClick={clicked}>
      <img src={props.image} alt={props.imageAlt} />
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
