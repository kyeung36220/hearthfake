import dualRaceContainer from "../assets/races/dualRaceContainer.webp"
import dualRaceContainerGlow from "../assets/races/dualRaceContainerGlow.webp"
import singleRaceContainer from "../assets/races/singleRaceContainer.webp"
import singleRaceContainerGlow from "../assets/races/singleRaceContainerGlow.webp"
import capitalizeFirstLetter from "../functions/capFirstLetter"
import minionStyles from "../styles/minionCard.module.css"


function RaceContainer({currentCard, handleGuessClicked}) {
    let races
    let raceCounter = 0
    if (currentCard.races) {
        if (currentCard.races.length === 1) {
            raceCounter = 1
        }
        else {
            raceCounter = 2
        }
        races = currentCard.races.map(race => {
            return race === "MECHANICAL" ? "MECH" : race
        })
    }

    return(<>
        {raceCounter === 1 && (<>
        <div id="raceContent"
             onMouseEnter={() => document.querySelector("#raceContainer").src = singleRaceContainerGlow}
             onMouseLeave={() => document.querySelector("#raceContainer").src = singleRaceContainer}
             onClick={(e) => handleGuessClicked(e)}
             className={minionStyles.raceContent}>
            <div id="raceText" 
                 className={minionStyles.raceText}>
                {capitalizeFirstLetter(races[0])}
            </div>
                </div>
        <img id="raceContainer" 
             src={singleRaceContainer}
             onMouseEnter={(e) => e.target.src=(singleRaceContainerGlow)}
             onMouseLeave={(e) => e.target.src=(singleRaceContainer)}
             onClick={(e) => handleGuessClicked(e)}
             className={minionStyles.raceContainer}/>
        
        </>)}
        {raceCounter === 2 && (<>
        <div id="dualRaceContent"
             onMouseEnter={() => document.querySelector("#dualRaceContainer").src = dualRaceContainerGlow}
             onMouseLeave={() => document.querySelector("#dualRaceContainer").src = dualRaceContainer}
             onClick={(e) => handleGuessClicked(e)}
             className={minionStyles.dualRaceContent}>
            <div id="raceText"
                 className={minionStyles.raceText}>
                {`${capitalizeFirstLetter(races[0])}`}
            </div>
            <div id="secondRaceText"
                 className={minionStyles.secondRaceText}>
                {`${capitalizeFirstLetter(races[1])}`}
            </div>
        </div>
        <img id="dualRaceContainer" 
             src={dualRaceContainer}
             onMouseEnter={(e) => e.target.src=(dualRaceContainerGlow)}
             onMouseLeave={(e) => e.target.src=(dualRaceContainer)}
             onClick={(e) => handleGuessClicked(e)}
             className={minionStyles.dualRaceContainer}/>
        
        </>)}
    
    </>)

}

export default RaceContainer