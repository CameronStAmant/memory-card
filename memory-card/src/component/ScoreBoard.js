import React, { useState, useEffect } from 'react';

export default function ScoreBoard() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const updateScoreOnClick = () => {
      setScore(score + 1);
    };
    const addEvents = document.getElementsByClassName('cards');
    console.log(addEvents.length);
    const cardArray = Array.from(addEvents);

    cardArray.forEach((element) => {
      element.addEventListener('click', updateScoreOnClick);
    });
  }, [score]);

  return (
    <div>
      <div>Your current score is {score}</div>
    </div>
  );
}
