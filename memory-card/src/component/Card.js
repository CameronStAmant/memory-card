import React, { useState } from 'react';
import './Card.css';

export default function Card({ description, image, imageAlt, events }) {
  const [alreadyChosen, setAlreadyChosen] = useState(false);

  const resetCards = () => {
    const layout2 = document.getElementById('layout');
    const childNodes2 = layout2.childNodes;
    const nodeArr = [Array.from(childNodes2)];
    const numberOfCards2 = [...Array(childNodes2.length).keys()];
    // setAlreadyChosen(false);
    nodeArr.forEach((element) => {
      console.log(element);
    });
  };

  const gameReset = () => {
    console.log('game over');

    const layout = document.getElementById('layout');
    const childNodes = layout.childNodes;
    const numberOfCards = [...Array(childNodes.length).keys()];
    // numberOfCards.forEach((element) => {
    //   childNodes[element].style.display = 'none';
    // });
    resetCards();
  };

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const randomizer = () => {
    setAlreadyChosen(true);

    if (alreadyChosen === true) {
      gameReset();
    }
    const layout = document.getElementById('layout');
    const childNodes = layout.childNodes;
    const numberOfCards = [...Array(childNodes.length).keys()];
    shuffle(numberOfCards);
    for (let i = 0; i < numberOfCards.length; i++) {
      layout.append(childNodes[numberOfCards[i]]);
    }
  };

  return (
    <div className="cards" events={events} onClick={randomizer}>
      <img src={image} alt={imageAlt} />
      <p>{description}</p>
    </div>
  );
}
