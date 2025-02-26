// Pictures
import checkmark from './assets/checkmark.svg'
import xmark from './assets/x.svg'

//React
import {useState, useEffect} from "react"

//Functions
import getRandomCard from './functions/randomCardGenerator'
import adjustCard from './functions/cardAdjuster.js'
import isGuessCorrect from './functions/checkIfCorrect'

//DOM
import handleGuessClickedDOM from "./DOM/handleGuessClickedDOM"
import handleNewGameClickDOM from "./DOM/handleNewGameDOM"

//Custom Display Components
import Mana from "./customDisplay/Mana.jsx"
import Health from "./customDisplay/Health.jsx"
import Attack from "./customDisplay/Attack.jsx"
import Gem from "./customDisplay/Gem.jsx"

function Card( {setCurrentScore, setBestScore, currentScore, bestScore }) {
    let [cards, setCards] = useState([])
    let [currentCard, setCurrentCard] = useState({})
    let [isCurrentCardWrong, setIsCurrentCardWrong] = useState(false)
    
    //getting card library
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch("https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json")
                const cardsArray = await response.json()
                setCards(cardsArray)
            } catch (error) {
                console.error("Error fetching card data:", error);
            }
        };
        fetchCards()
    }, [])

    //putting eventlistener on button
    useEffect (() => {
        if (cards.length > 0) {
            document.querySelector("#newGame").classList.remove("hidden")
            document.querySelector("#newGame").classList.add("displayBlock")
        }
    }, [cards])

    async function applyRandomCard() {
        const cardSelected = getRandomCard(cards)
   
        // 66% chance that there is something wrong with card
        const randI = Math.floor(Math.random() * (2 - 0 + 1))
        if (randI === 0) {
            setCurrentCard(cardSelected)
            setIsCurrentCardWrong(false)
        }
        else {
            const adjustedCard = adjustCard(cardSelected)
            setCurrentCard(adjustedCard)
            setIsCurrentCardWrong(true)
        }
        
        document.querySelector("#card").src= `https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${cardSelected.id}.png`
        // below checks for broken images
        if (document.querySelector("#card").width <= 0 && document.querySelector("#card").height <= 0) {
            applyRandomCard()
        }
    }

    function handleGuessClicked(e) {
        const isGuessCorrectBool = isGuessCorrect(e, isCurrentCardWrong, currentCard)
        handleGuessClickedDOM(e, isGuessCorrectBool, currentCard, isCurrentCardWrong)

        if (isGuessCorrectBool === true) {
            setCurrentScore(currentScore += 1)
            setTimeout(() => {
                applyRandomCard()
            },"1000")
            return
        }
        else if (isGuessCorrectBool === false){
            if (bestScore < currentScore) {
                setBestScore(currentScore)
            }            
            return
        }
        console.error("handleGuessClicked Error")
    }

    function handleNewGameClick() {
        applyRandomCard()
        setCurrentScore(0)
        handleNewGameClickDOM()
    }
    
    return (
        <>
            <div id="cardContainer">
                <img id="card"/>
                {currentCard.type === "MINION" && 
                    (<div id="customDisplay">
                        <Mana currentCard={currentCard}
                              handleGuessClicked={handleGuessClicked}/>
                        <Health currentCard={currentCard}
                                handleGuessClicked={handleGuessClicked}/>
                        <Attack currentCard={currentCard}
                                handleGuessClicked={handleGuessClicked}/>
                        <Gem currentCard={currentCard}
                             handleGuessClicked={handleGuessClicked}/>
                    </div>)}
            </div>
            <button id="newGame"
                    className="hidden"
                    onClick={() => handleNewGameClick()}>
                New Game
            </button>
            <button id="nothingWrong"
                    className="hidden"
                    onClick={(e) => handleGuessClicked(e)}>
                Nothing wrong
            </button>
            <img id="checkmark"
                 src={checkmark}
                 className="hidden"/>
            <img id="xmark"
                 src={xmark}
                 className="hidden"/>
            <div id="reasonForError"></div>
        </>
    )
}

  
export default Card