import Card from "./Card.jsx"
import {useState} from "react"
import github from "./assets/other/github-mark.svg"
import questionMark from "./assets/other/question-mark.svg"

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
      <img id="question"
           src={questionMark}/>
      <Card setCurrentScore={setCurrentScore}
            currentScore={currentScore}
            setBestScore={setBestScore}
            bestScore={bestScore}/>
      <div id="signature">
        <a href="https://github.com/kyeung36220" target="_blank" rel="noopener noreferrer"><img id="githubIcon"src={github}/></a>
        <span id="myName">Made by Kenneth Yeung</span>
      </div>

    </div>
  );
};

export default App
