import healthGlowImg from "../assets/customOverlay/healthGlow.webp"
import healthImg from "../assets/customOverlay/health.webp"
import minionStyles from "../styles/minionCard.module.css"

function Health({currentCard, handleGuessClicked}) {
    return(
        <>
            <a id="healthNumber"
                onMouseEnter={() => document.querySelector("#health").src = healthGlowImg}
                onMouseLeave={() => document.querySelector("#health").src = healthImg}
                onClick={(e) => handleGuessClicked(e)}
                className={minionStyles.healthNumber}>
            {currentCard.health}</a>
            <img id="health" 
                src={healthImg}
                onMouseEnter={(e) => e.target.src=(healthGlowImg)}
                onMouseLeave={(e) => e.target.src=(healthImg)}
                onClick={(e) => handleGuessClicked(e)}
                className={minionStyles.health}/>
        </>
    )
}

export default Health