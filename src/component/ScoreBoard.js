import React from 'react';
import './ScoreBoard.css';

function ScoreBoard(props) {
  return (
    <div>
      <div id="text">
        <p>The goal of the game is to not choose the same color twice.</p>
        <p>
          Your current score is {props.score} and your best score is{' '}
          {props.bestScore}.
        </p>
      </div>
    </div>
  );
}

export { ScoreBoard };
