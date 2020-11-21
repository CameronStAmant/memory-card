import './App.css';
import Card from './component/Card';
import { card1, card2, card3, card4 } from './component/CardData';
import { ScoreBoard } from './component/ScoreBoard';
import React, { useEffect, useState } from 'react';
import Reset from './component/Reset';

function GameBoard() {
  const [score, setScore] = useState(2);
  const [bestScore, setBestScore] = useState(3);

  return (
    <div>
      <ScoreBoard score={score} bestScore={bestScore} />
      <Reset score={score} onClick={(value) => setScore(value)} />
      <div id="layout">
        <Card {...card1} />
        <Card {...card2} />
        <Card {...card3} />
        <Card {...card4} />
      </div>
    </div>
  );
}

export default GameBoard;
