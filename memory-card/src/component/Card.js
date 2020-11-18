import React, { useState } from 'react';
import './Card.css';
import ScoreBoard from './ScoreBoard';

export default function Card({ description, image, imageAlt }) {
  const [alreadyChosen, setAlreadyChosen] = useState(false);

  function Randomizer() {
    setAlreadyChosen(true);
    const layout = document.getElementById('layout');
    const childNodes = layout.childNodes;
    layout.append(childNodes[0]);
    layout.append(childNodes[2]);
    // layout.append(childNodes[0]);
    layout.append(childNodes[2]);
  }

  ScoreBoard(1);

  return (
    <div className="card" onClick={Randomizer}>
      <img src={image} alt={imageAlt} />
      <p>{description}</p>
    </div>
  );
}
