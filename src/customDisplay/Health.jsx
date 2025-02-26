import healthGlowImg from "../assets/customOverlay/healthGlow.png"
import healthImg from "../assets/customOverlay/health.png"

function Health({currentCard, handleGuessClicked}) {
    return(
        <>
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
        </>
    )
}

export default Health