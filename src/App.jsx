import Card from "./Card.jsx"
import {useState} from "react"

const App = () => {

  let [currentScore, setCurrentScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);

  return (
    <div>
      <div id="header">
        Hearth
        <span style={{color: 'red'}}>fake</span>
      </div>
      <div id="currentScore">
        Current Score: {currentScore}
      </div>
      <div id="bestScore">
        Best Score: {bestScore}
      </div>
      <Card setCurrentScore={setCurrentScore}
            currentScore={currentScore}
            setBestScore={setBestScore}
            bestScore={bestScore}/>
    </div>
  );
};

export default App
