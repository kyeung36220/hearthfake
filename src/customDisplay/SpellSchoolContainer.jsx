import spellSchoolContainer from "../assets/spellSchool/spellSchoolFrame.webp"
import spellSchoolContainerGlow from "../assets/spellSchool/spellSchoolFrameGlow.webp"
import spellSchoolFooter from "../assets/spellSchool/spellSchoolFooter.webp"

import spellStyles from "../styles/spellCard.module.css"
import capitalizeFirstLetter from "../functions/capFirstLetter"

function SpellSchoolContainer({currentCard, handleGuessClicked}) {
    return(<>
        {currentCard.spellSchool && (<>
            <img id="spellSchoolContainer"
                 className={spellStyles.spellSchoolContainer}
                 src={spellSchoolContainer}
                 onMouseEnter={(e) => e.target.src=(spellSchoolContainerGlow)}
                 onMouseLeave={(e) => e.target.src=(spellSchoolContainer)}
                 onClick={(e) => handleGuessClicked(e)}/>
            <img id="spellSchoolFooter"
                 className={spellStyles.spellSchoolFooter}
                 src={spellSchoolFooter}/>
            <div id="spellSchoolText"
                 className={spellStyles.spellSchoolText}
                 onMouseEnter={() => document.querySelector("#spellSchoolContainer").src = spellSchoolContainerGlow}
                 onMouseLeave={() => document.querySelector("#spellSchoolContainer").src = spellSchoolContainer}
                 onClick={(e) => handleGuessClicked(e)}>
                {capitalizeFirstLetter(currentCard.spellSchool)}
            </div> 
        </>)} 
    </>)
}

export default SpellSchoolContainer