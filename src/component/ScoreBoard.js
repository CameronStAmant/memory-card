import React from 'react';

function ScoreBoard(props) {
  return (
    <div>
      <div>
        Your current score is {props.score} and your best score is{' '}
        {props.bestScore}.
      </div>
    </div>
  );
}

export { ScoreBoard };
