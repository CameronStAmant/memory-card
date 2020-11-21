import React from 'react';
import './Card.css';

function Card(props) {
  console.log(props.selected);

  const clicked = () => {
    props.selected(props.index);
    props.onClick();
  };
  return (
    <div className="cards" onClick={clicked}>
      <img src={props.image} alt={props.imageAlt} />
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
