import React from 'react';

function ScoreBoard(props) {
  // const [score, setScore] = useState(props.score);
  // const [bestScore, setBestScore] = useState(props.bestScore);

  // const handleScoreChange = (value) => {
  //   setScore(value);
  // };

  // useEffect(() => {
  // function updateScoreOnClick() {
  // setScore((score) => score);
  // }
  // const addEvents = document.getElementsByClassName('cards');
  // const cardArray = Array.from(addEvents);
  // if (bestScore < score) {
  //   setBestScore(bestScore + 1);
  // }
  // cardArray.forEach((element) => {
  //   if (element.getAttribute('events') === 'false') {
  //     element.addEventListener('click', updateScoreOnClick);
  //     element.setAttribute('events', 'true');
  //   }
  // });
  // }, [props.score]);

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
