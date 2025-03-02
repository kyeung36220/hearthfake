import manaGlowImg from "../assets/customOverlay/manaGlow.png"
import manaImg from "../assets/customOverlay/mana.png"
import minionStyles from "../styles/minionCard.module.css"
import heroStyles from "../styles/heroCard.module.css"

function Mana( {currentCard, handleGuessClicked} ) {

    // All types use minion style for mana because position does not change unless Hero Card
    let styles = minionStyles
    if (currentCard === "HERO") {
        styles = heroStyles
    }
    return (<>
        {!currentCard.hideStats && (<>
        <a id="manaNumber"
            onMouseEnter={() => document.querySelector("#mana").src = manaGlowImg}
            onMouseLeave={() => document.querySelector("#mana").src = manaImg}
            onClick={(e) => handleGuessClicked(e)}
            className={styles.manaNumber}>
        {currentCard.cost}</a>
        <img id="mana" 
            src={manaImg}
            onMouseEnter={(e) => e.target.src=(manaGlowImg)}
            onMouseLeave={(e) => e.target.src=(manaImg)}
            onClick={(e) => handleGuessClicked(e)}
            className={styles.mana}/> 
        </>)}
    </>)
}

export default Mana