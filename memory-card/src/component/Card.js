import React from 'react';
import './Card.css';
// import ScoreBoard from './ScoreBoard';

export default function Card({ description, image, imageAlt }) {
  // const [alreadyChosen, setAlreadyChosen] = useState(false);

  // let updateScore = false;

  // function Randomizer() {
  //   setAlreadyChosen(true);
  // const layout = document.getElementById('layout');
  // const childNodes = layout.childNodes;
  // layout.append(childNodes[0]);
  // layout.append(childNodes[2]);
  // layout.append(childNodes[0]);
  // layout.append(childNodes[1]);
  // updateScore = true;
  // return updateScore;
  // }
  // console.log(updateScore);
  // ScoreBoard(updateScore);
  // updateScore = true;
  // console.log(updateScore);

  return (
    <div className="cards">
      <img src={image} alt={imageAlt} />
      <p>{description}</p>
    </div>
  );
}
