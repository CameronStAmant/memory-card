import React from 'react';
import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card21,
  card22,
  card23,
  card24,
  card25,
  card26,
  card27,
  card28,
  card29,
  card30,
} from './CardData';
import Card from './Card';
import './CardDeck.css';

export default function CardDeck(props) {
  const deck = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card21,
    card22,
    card23,
    card24,
    card25,
    card26,
    card27,
    card28,
    card29,
    card30,
  ];
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
