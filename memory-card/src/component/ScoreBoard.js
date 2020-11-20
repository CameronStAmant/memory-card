import React, { useState, useEffect } from 'react';

function ScoreBoard() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const reset = () => {
    setScore(0);

    const layout = document.getElementById('layout');
    const childNodes = layout.childNodes;
    const numberOfCards = [...Array(childNodes.length).keys()];
    numberOfCards.forEach((element) => {
      childNodes[element].style.display = 'inline';
    });
  };

  let ResetButton;
  ResetButton = (
    <button id="reset" onClick={reset}>
      Restart
    </button>
  );

  useEffect(() => {
    function updateScoreOnClick() {
      setScore((score) => score + 1);
    }
    const addEvents = document.getElementsByClassName('cards');
    const cardArray = Array.from(addEvents);
    if (bestScore < score) {
      setBestScore(bestScore + 1);
    }
    cardArray.forEach((element) => {
      if (element.getAttribute('events') === 'false') {
        element.addEventListener('click', updateScoreOnClick);
        element.setAttribute('events', 'true');
      }
    });
  }, [score, bestScore]);

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
