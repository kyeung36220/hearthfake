import Card from "./Card.jsx"
import {useState, useEffect, useRef} from "react"
import github from "./assets/other/github-mark.svg"
import questionMark from "./assets/other/question-mark.svg"
import rightArrow from "./assets/other/rightArrow.svg"
import ExpansionChooseList from "./customDisplay/ExpansionChooseList.jsx"
import book from "./assets/other/book.svg"

const App = () => {

  const fullExpansionsArray = [  
    {name: "CORE", display: "Core", available: true},
    {name: "VANILLA", display: "Legacy", available: true},
    {name: "NAXX", display: "Curse of Naxxramas", available: true},
    {name: "GVG", display: "Goblins vs Gnomes", available: true},
    {name: "BRM", display: "Blackrock Mountain", available: true},
    {name: "TGT", display: "The Grand Tournament", available: true},
    {name: "LOE", display: "League of Explorers", available: true},
    {name: "OG", display: "Whispers of the Old Gods", available: true},
    {name: "KARA", display: "One Night in Karazhan", available: true},
    {name: "GANGS", display: "Mean Streets of Gadgetzan", available: true},
    {name: "UNGORO", display: "Journey to Un'Goro", available: true},
    {name: "ICECROWN", display: "Knights of the Frozen Throne", available: true},
    {name: "LOOTAPALOOZA", display: "Kobolds and Catacombs", available: true},
    {name: "GILNEAS", display: "The Witchwood", available: true},
    {name: "BOOMSDAY", display: "The Boomsday Project", available: true},
    {name: "TROLL", display: "Rastakhan's Rumble", available: true},
    {name: "DALARAN", display: "Rise of Shadows", available: true},
    {name: "ULDUM", display: "Saviors of Uldum", available: true},
    {name: "DRAGONS", display: "Descent of Dragons", available: true},
    {name: "YEAR_OF_THE_DRAGON", display: "Galakrond's Awakening", available: true},
    {name: "DEMON_HUNTER_INITIATE", display: "Demon Huner Initiate", available: true},
    {name: "BLACK_TEMPLE", display: "Ashes of Outland", available: true},
    {name: "SCHOLOMANCE", display: "Scholomance Academy", available: true},
    {name: "DARKMOON_FAIRE", display: "Madness at the Darkmoon Faire", available: true},
    {name: "THE_BARRENS", display: "Forged in the Barrens", available: true},
    {name: "STORMWIND", display: "United in Stormwind", available: true},
    {name: "ALTERAC_VALLEY", display: "Fractured in Alterac Valley", available: true},
    {name: "THE_SUNKEN_CITY", display: "Voyage of the Sunken City", available: true},
    {name: "REVENDRETH", display: "Murder at Castle Nathria", available: true},
    {name: "PATH_OF_ARTHAS", display: "Path of Arthas", available: true},
    {name: "RETURN_OF_THE_LICH_KING", display: "March of the Lich King", available: true},
    {name: "WONDERS", display: "Caverns of Time", available: true},
    {name: "BATTLE_OF_THE_BANDS", display: "Festival of Legends", available: true},
    {name: "TITANS", display: "TITANS", available: true},
    {name: "WILD_WEST", display: "Showdown in the Badlands", available: true},
    {name: "EVENT", display: "Event Cards", available: true},
    {name: "WHIZBANGS_WORKSHOP", display: "Whizbang's Workshop", available: true},
    {name: "ISLAND_VACATION", display: "Perils in Paradise", available: true},
    {name: "SPACE", display: "The Great Dark Beyond", available: true},
  ]

  let [currentScore, setCurrentScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  let [availableExpansions, setAvailableExpansions] = useState()



  useEffect(() => {
    if (localStorage.getItem("expansionsArray") !== null) {
      const expansionsArray = JSON.parse(localStorage.getItem("expansionsArray"))
      setAvailableExpansions(expansionsArray)
    }
    else {
      setAvailableExpansions(fullExpansionsArray)
    }
    
    if (localStorage.getItem("bestScore") !== null) {
      setBestScore(localStorage.getItem("bestScore"))
    }
    }, [])


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
        <img id="questionRightArrow" 
             src={rightArrow}/>
        <img id="question"
             src={questionMark}
             onClick={() => document.querySelector("#tutorialContainer").classList.remove("hidden")}/>
      </div>
      <div id="bookTextContainer">
        <div id="bookText">Want to Change Expansion Selection? Click Here </div>
        <img id="bookRightArrow" 
             src={rightArrow}/>
        <img id="book"
             src={book}
             onClick={() => document.querySelector("#expansionsScreen").classList.remove("hidden")}/>
      </div>

      <div id="tutorialContainer" className="hidden">
        <b className="center header">Welcome to Hearthfake!</b><br/>
        <span className="center">Inspired by&nbsp;         
          <a href="https://www.youtube.com/playlist?list=PLbWetr69v7tlIa6x6n_k7OCwdmZ3YPzDj" target="_blank" rel="noopener noreferrer">Rarran's Do You Know Hearthstone? series</a>
          , this game challenges you to spot errors on Hearthstone cards.</span> <br/>
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

      <ExpansionChooseList availableExpansions={availableExpansions} 
                           setAvailableExpansions={setAvailableExpansions}/>
  
      <Card setCurrentScore={setCurrentScore}
            currentScore={currentScore}
            setBestScore={setBestScore}
            bestScore={bestScore}
            availableExpansions={availableExpansions}/>
  
      <div id="signature">
        <a href="https://github.com/kyeung36220" target="_blank" rel="noopener noreferrer"><img id="githubIcon"src={github}/></a>
        <span id="myName">Made by Kenneth Yeung</span>
      </div>

    </div>
  );
};

export default App
