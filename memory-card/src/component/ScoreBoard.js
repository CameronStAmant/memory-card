import React, { useState, useEffect } from 'react';

export default function ScoreBoard() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const updateScoreOnClick = () => {
      setScore(score + 1);
    };

    const addEvents = document.getElementsByClassName('cards');
    console.log(addEvents);
    const cardArray = Array.from(addEvents);

    cardArray.forEach((element) => {
      element.addEventListener('click', updateScoreOnClick);
    });
    // document
    //   .getElementById('btn')
    //   .addEventListener('click', updateScoreOnClick);

    // console.log('in the ScoreBoard');
    // if (updateScore === true) {
    //   setScore(score + 1);
    // }
  }, [score]);

  return (
    <div>
      <button id="btn">Add score</button>
      <div>Your current score is {score}</div>
    </div>
  );
}
