import manaGlowImg from "../assets/customOverlay/manaGlow.png"
import manaImg from "../assets/customOverlay/mana.png"
import minionStyles from "../styles/minionCard.module.css"

function Mana( {currentCard, handleGuessClicked} ) {
    return (
        <>
            <a id="manaNumber"
                onMouseEnter={() => document.querySelector("#mana").src = manaGlowImg}
                onMouseLeave={() => document.querySelector("#mana").src = manaImg}
                onClick={(e) => handleGuessClicked(e)}
                className={minionStyles.manaNumber}>
            {currentCard.cost}</a>
            <img id="mana" 
                src={manaImg}
                onMouseEnter={(e) => e.target.src=(manaGlowImg)}
                onMouseLeave={(e) => e.target.src=(manaImg)}
                onClick={(e) => handleGuessClicked(e)}
                className={minionStyles.mana}/>
        </>
    )
}

export default Mana