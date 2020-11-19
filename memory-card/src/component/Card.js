import React from 'react';
import './Card.css';

export default function Card({ description, image, imageAlt, events }) {
  // const [alreadyChosen, setAlreadyChosen] = useState(false);

  function Randomizer() {
    // setAlreadyChosen(true);
    const layout = document.getElementById('layout');
    const childNodes = layout.childNodes;
    const numberOfCards = [...Array(childNodes.length).keys()];
    shuffle(numberOfCards);
    for (let i = 0; i < numberOfCards.length; i++) {
      layout.append(childNodes[numberOfCards[i]]);
    }

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  return (
    <div className="cards" events={events} onClick={Randomizer}>
      <img src={image} alt={imageAlt} />
      <p>{description}</p>
    </div>
  );
}
