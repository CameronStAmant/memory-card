import './App.css';
import Card from './component/Card';
import { card1, card2, card3, card4 } from './component/CardData';

function App() {
  return (
    <div>
      <div className="layout">
        <Card {...card1} />
        <Card {...card2} />
        <Card {...card3} />
        <Card {...card4} />
      </div>
    </div>
  );
}

export default App;
