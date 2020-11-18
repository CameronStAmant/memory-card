import React, { useState } from 'react';
import './Card.css';

export default function Card({ description, image, imageAlt }) {
  const [alreadyChosen, setAlreadyChosen] = useState(false);

  function Randomizer() {
    setAlreadyChosen(true);
    alert(alreadyChosen);
    return <p>done</p>;
  }

  return (
    <div className="card" onClick={Randomizer}>
      <img src={image} alt={imageAlt} />
      <p>{description}</p>
    </div>
  );
}
