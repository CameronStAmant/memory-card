import './GameBoard.css';
import Card from './component/Card';
import { card1, card2, card3, card4 } from './component/CardData';
import { ScoreBoard } from './component/ScoreBoard';
import React, { useState } from 'react';
import Reset from './component/Reset';

function GameBoard() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

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
      <div id="layout">
        <Card {...card1} onClick={updateScore} />
        <Card {...card2} onClick={updateScore} />
        <Card {...card3} onClick={updateScore} />
        <Card {...card4} onClick={updateScore} />
      </div>
    </div>
  );
}

export default GameBoard;
