import brokenShield from "../assets/customOverlay/brokenShield.png"
import brokenShieldGlow from "../assets/customOverlay/brokenShieldGlow.png"
import weaponStyles from "../styles/weaponCard.module.css"

function Durability({currentCard, handleGuessClicked}) {
    return(<>
            <a id="durabilityNumber"
                onMouseEnter={() => document.querySelector("#durability").src = brokenShieldGlow}
                onMouseLeave={() => document.querySelector("#durability").src = brokenShield}
                onClick={(e) => handleGuessClicked(e)}
                className={weaponStyles.durabilityNumber}>
            {currentCard.type === "WEAPON" ? currentCard.durability: currentCard.health}</a>
            <img id="durability" 
                src={brokenShield}
                onMouseEnter={(e) => e.target.src=(brokenShieldGlow)}
                onMouseLeave={(e) => e.target.src=(brokenShield)}
                onClick={(e) => handleGuessClicked(e)}
                className={weaponStyles.durability}/>
        </>)
}

export default Durability