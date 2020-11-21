import CardDeck from './component/CardDeck';
import { ScoreBoard } from './component/ScoreBoard';
import React, { useState } from 'react';
import Reset from './component/Reset';

function GameBoard() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selected, setSelected] = useState([false, false, false, false]);

  const updateSelected = (index) => {
    const selectedArray = selected;
    selectedArray[index] = true;
    setSelected(selectedArray);
  };

  const updateScore = () => {
    setScore((score) => score + 1);
    if (bestScore <= score) {
      setBestScore((bestScore) => bestScore + 1);
    }
  };

  return (
    <div>
      <ScoreBoard score={score} bestScore={bestScore} />
      <Reset score={score} onClick={(value) => setScore(value)} />
      <CardDeck
        onClick={updateScore}
        selected={(index) => updateSelected(index)}
      />
    </div>
  );
}

export default GameBoard;
