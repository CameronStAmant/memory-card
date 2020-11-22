import React from 'react';
import './ScoreBoard.css';

function ScoreBoard(props) {
  return (
    <div>
      <div id="text">
        Your current score is {props.score} and your best score is{' '}
        {props.bestScore}.
      </div>
    </div>
  );
}

export { ScoreBoard };
