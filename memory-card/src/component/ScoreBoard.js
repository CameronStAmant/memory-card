import React, { useState, useEffect } from 'react';

export default function ScoreBoard(point) {
  const [score, setScore] = useState(0);

  // if (point === 1) {
  // }

  useEffect(() => {
    setScore(score);
    console.log(score);
  }, [score]);

  return (
    <div>
      <div>Your current score is {score}</div>
    </div>
  );
}
