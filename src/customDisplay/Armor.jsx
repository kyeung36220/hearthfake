import armorImg from "../assets/customOverlay/heroShield.webp"
import armorGlowImg from "../assets/customOverlay/heroShieldGlow.webp"
import heroStyles from "../styles/heroCard.module.css"

function Armor({currentCard, handleGuessClicked}) {
    return(<>
        <a id="armorNumber"
                        onMouseEnter={() => document.querySelector("#armor").src = armorGlowImg}
                        onMouseLeave={() => document.querySelector("#armor").src = armorImg}
                        onClick={(e) => handleGuessClicked(e)}
                        className={heroStyles.armorNumber}>
                    {currentCard.armor}</a>
        <img id="armor" 
            src={armorImg}
            onMouseEnter={(e) => e.target.src=(armorGlowImg)}
            onMouseLeave={(e) => e.target.src=(armorImg)}
            onClick={(e) => handleGuessClicked(e)}
            className={heroStyles.armor}/>
    
    </>)
}

export default Armor