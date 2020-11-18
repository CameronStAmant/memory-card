import './App.css';
import Card from './component/Card';
import { card1, card2, card3, card4 } from './component/CardData';
import ScoreBoard from './component/ScoreBoard';

function App() {
  return (
    <div>
      <ScoreBoard />
      <div id="layout">
        <Card {...card1} />
        <Card {...card2} />
        <Card {...card3} />
        <Card {...card4} />
      </div>
    </div>
  );
}

export default App;
