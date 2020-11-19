import React, { useState, useEffect } from 'react';

function ScoreBoard() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const reset = () => {
    setScore(0);
  };

  let ResetButton;
  ResetButton = (
    <button id="reset" onClick={reset}>
      Restart
    </button>
  );

  const increaseScores = () => {
    setScore((score) => score + 1);
    console.log('------');
    const results = score + 1;
    console.log(score);
    console.log(bestScore);
    // if (bestScore < score) {
    setBestScore((bestScore) => bestScore + 1);
    // }
  };

  useEffect(() => {
    function updateScoreOnClick() {
      increaseScores();
    }
    const addEvents = document.getElementsByClassName('cards');
    const cardArray = Array.from(addEvents);

    cardArray.forEach((element) => {
      if (element.getAttribute('events') === 'false') {
        element.addEventListener('click', updateScoreOnClick);
        element.setAttribute('events', 'true');
      }
    });
  });

  return (
    <div>
      <div>
        Your current score is {score} and your best score is {bestScore}.
      </div>
      {ResetButton}
    </div>
  );
}

export { ScoreBoard };
