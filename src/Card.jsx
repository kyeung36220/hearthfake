import './App.css'
import healthImg from "./assets/health.png"
import attackImg from "./assets/attack.png"
import manaImg from "./assets/mana.png"
import healthGlowImg from "./assets/healthGlow.png"
import attackGlowImg from "./assets/attackGlow.png"
import manaGlowImg from "./assets/manaGlow.png"
import {useState, useEffect} from "react"
import getRandomCard from './randomCardGenerator'
import adjustCard from '../cardAdjuster'
import isGuessCorrect from './checkIfCorrect'
import checkmark from './assets/checkmark.svg'
import xmark from './assets/x.svg'

function Card( {setCurrentScore, setBestScore, currentScore, bestScore }) {
    let [cards, setCards] = useState([]);
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
        }
    }, [cards])

    function applyRandomCard() {
        const cardSelected = getRandomCard(cards)
        document.querySelector("#card").src= `https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${cardSelected.id}.png`
        
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
    }

    function handleGuessClicked(e) {
        const isGuessCorrectBool = isGuessCorrect(e, isCurrentCardWrong, currentCard)
        document.querySelector("#customDisplay").classList.add("hidden")
        document.querySelector("#nothingWrong").classList.add("hidden")

        if (isGuessCorrectBool === true) {
            setCurrentScore(currentScore += 1)
            document.querySelector("#checkmark").classList.remove("hidden")

            setTimeout(() => {
                applyRandomCard()
                document.querySelector("#nothingWrong").classList.remove("hidden")
                document.querySelector("#customDisplay").classList.remove("hidden")
                document.querySelector("#checkmark").classList.add("hidden")
            },"1000")
            return
        }
        else if (isGuessCorrectBool === false){
            if (bestScore < currentScore) {
                setBestScore(currentScore)
            }
            document.querySelector("#xmark").classList.remove("hidden")
            document.querySelector("#newGame").classList.remove("hidden")
    
            if (isCurrentCardWrong === false) {
                document.querySelector("#reasonForError").textContent = `Card was correct`
            }
            else {
                document.querySelector("#reasonForError").textContent  = 
                `${capitalizeFirstLetter(currentCard.wrong)} was wrong.`
            }
            return
        }
        console.error("handleGuessClicked Error")
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    function handleNewGameClick() {
        applyRandomCard()
        document.querySelector("#newGame").classList.add("hidden")
        document.querySelector("#nothingWrong").classList.remove("hidden")
        setCurrentScore(0)
        document.querySelector("#customDisplay").classList.remove("hidden")
        document.querySelector("#xmark").classList.add("hidden")
        document.querySelector("#reasonForError").textContent = ""
    }
    
    return (
        <>
            <div id="cardContainer">
                    <img id="card"/>
                    {currentCard.type === "MINION" && 
                    (<div id="customDisplay">
                        <a id="manaNumber"
                            onMouseEnter={() => document.querySelector("#mana").src = manaGlowImg}
                            onMouseLeave={() => document.querySelector("#mana").src = manaImg}
                            onClick={(e) => handleGuessClicked(e)}>
                        {currentCard.cost}</a>
                        <img id="mana" 
                            src={manaImg}
                            onMouseEnter={(e) => e.target.src=(manaGlowImg)}
                            onMouseLeave={(e) => e.target.src=(manaImg)}
                            onClick={(e) => handleGuessClicked(e)}/>
                
                        <a id="healthNumber"
                           onMouseEnter={() => document.querySelector("#health").src = healthGlowImg}
                           onMouseLeave={() => document.querySelector("#health").src = healthImg}
                           onClick={(e) => handleGuessClicked(e)}>
                        {currentCard.health}</a>
                        <img id="health" 
                            src={healthImg}
                            onMouseEnter={(e) => e.target.src=(healthGlowImg)}
                            onMouseLeave={(e) => e.target.src=(healthImg)}
                            onClick={(e) => handleGuessClicked(e)}/>

                        <a id="attackNumber"
                           onMouseEnter={() => document.querySelector("#attack").src = attackGlowImg}
                           onMouseLeave={() => document.querySelector("#attack").src = attackImg}
                           onClick={(e) => handleGuessClicked(e)}>
                        {currentCard.attack}</a>
                        <img id="attack" 
                            src={attackImg}
                            onMouseEnter={(e) => e.target.src=(attackGlowImg)}
                            onMouseLeave={(e) => e.target.src=(attackImg)}
                            onClick={(e) => handleGuessClicked(e)}/>
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
                 className="hidden"></img>
            <img id="xmark"
                 src={xmark}
                 className="hidden"></img>
            <div id="reasonForError"></div>
        </>
    )
}

  
export default Card