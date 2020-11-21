import React from 'react';
import { card1, card2, card3, card4 } from './CardData';
import Card from './Card';
import './CardDeck.css';

export default function CardDeck(props) {
  const deck = [card1, card2, card3, card4];
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const displayCards = shuffle(deck).map((id, index) => {
    return (
      <Card
        {...id}
        index={id.id}
        key={index}
        onClick={props.onClick}
        selected={props.selected}
      />
    );
  });

  return <div id="layout">{displayCards}</div>;
}
