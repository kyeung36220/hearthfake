import Card from "./Card.jsx"
import {useState} from "react"
import github from "./assets/other/github-mark.svg"
import questionMark from "./assets/other/question-mark.svg"
import rightArrow from "./assets/other/rightArrow.svg"

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
  
      <div id="questionContainer">
        <div id="questionText">First Time Playing? Click Here </div>
        <img id="rightArrow" 
             src={rightArrow}/>
        <img id="question"
             src={questionMark}
             onClick={() => document.querySelector("#tutorialContainer").classList.remove("hidden")}/>
      </div>

      <div id="tutorialContainer" className="hidden">
        <b className="center header">Welcome to Hearthfake!</b><br/>
        <span className="center">Inspired by Rarran's Do You Know Hearthstone? series, this game challenges you to spot errors on Hearthstone cards.</span> <br/>
        <b className="center header">How to Play:</b><br/>
        <span className="center">Your goal is to determine if a card has any mistakes. If it does, identify what’s wrong!</span> <br/>
        <b className="ulHeader">Possible Errors:</b>
        <ul>
          <li>Cost (Mana cost)</li>
          <li>Health</li>
          <li>Attack (Weapon and Minion)</li>
          <li>Gem (Rarity) <em>Except Heroes</em></li>
          <li>Text</li>
          <li>Race (Minion type)</li>
          <li>Spell School</li>
          <li>Durability (Weapon and Location)</li>
        </ul>
        <b className="ulHeader">Things That Are Always Correct:</b>
        <ul>
        <li>Card Class (Ex. Whether it is a Paladin Card or a Warrior Card)</li>
        <li>Text Formatting (Punctuation and spacing)</li>
        <li>Card Image</li>
        <li>Card Name</li>
        <li>Card Emblem (Ex. Whether card was released in TGT or Naxx)</li>
        </ul>
        <span className="ulHeader">Good luck, and may your knowledge of Hearthstone be strong!</span>
        <button id="tutorialButton"
                onClick={() => document.querySelector("#tutorialContainer").classList.add("hidden")}>Got it!</button>
      </div>
  
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
