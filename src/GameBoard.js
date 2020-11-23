import CardDeck from './component/CardDeck';
import { ScoreBoard } from './component/ScoreBoard';
import React, { useState } from 'react';
import Reset from './component/Reset';

function GameBoard() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const restart = () => {
    const length = new Array(selected.length);
    setSelected(length.fill(false, 0));
    setScore(0);
    return;
  };

  const updateSelected = (index) => {
    const selectedArray = selected;
    if (selectedArray[index] === true) {
      alert('Game over. Looks like that color was chosen already.');
      restart();
    } else {
      setScore((score) => score + 1);
      if (bestScore <= score) {
        setBestScore((bestScore) => bestScore + 1);
      }
      selectedArray[index] = true;
      setSelected(selectedArray);
    }
  };

  return (
    <div>
      <ScoreBoard score={score} bestScore={bestScore} />
      <Reset score={score} reset={restart} />
      <CardDeck selected={(index) => updateSelected(index)} />
    </div>
  );
}

export default GameBoard;
