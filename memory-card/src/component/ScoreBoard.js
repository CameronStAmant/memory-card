import React, { useState, useEffect } from 'react';

export default function ScoreBoard() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    function updateScoreOnClick() {
      setScore((score) => score + 1);
    }
    const addEvents = document.getElementsByClassName('cards');
    const cardArray = Array.from(addEvents);

    cardArray.forEach((element) => {
      if (element.getAttribute('events') === 'false') {
        element.addEventListener('click', updateScoreOnClick);
        element.setAttribute('events', 'true');
      }
    });
  }, [score]);

  return (
    <div>
      <div>Your current score is {score}</div>
    </div>
  );
}
