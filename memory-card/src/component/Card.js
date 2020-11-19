import React from 'react';
import './Card.css';
// import ScoreBoard from './ScoreBoard';

export default function Card({ description, image, imageAlt, events }) {
  // const [alreadyChosen, setAlreadyChosen] = useState(false);

  // function Randomizer() {
  //   setAlreadyChosen(true);
  // const layout = document.getElementById('layout');
  // const childNodes = layout.childNodes;
  // layout.append(childNodes[0]);
  // layout.append(childNodes[2]);
  // layout.append(childNodes[0]);
  // layout.append(childNodes[1]);

  return (
    <div className="cards" events={events}>
      <img src={image} alt={imageAlt} />
      <p>{description}</p>
    </div>
  );
}
