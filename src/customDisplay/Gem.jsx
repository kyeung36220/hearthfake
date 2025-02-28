import common from "../assets/gems/common.png"
import commonGlow from "../assets/gems/commonGlow.png"
import rare from "../assets/gems/rare.png"
import rareGlow from "../assets/gems/rareGlow.png"
import epic from "../assets/gems/epic.png"
import epicGlow from "../assets/gems/epicGlow.png"
import legendary from "../assets/gems/legendary.png"
import legendaryGlow from "../assets/gems/legendaryGlow.png"
import legendaryDragon from "../assets/gems/legendaryDragon.png"
import legendaryDragonGlow from "../assets/gems/legendaryDragonGlow.png"

import minionStyles from "../styles/minionCard.module.css"

function Gem({currentCard, handleGuessClicked}) {
    const rarity = currentCard.rarity
    return(
        <>
           {rarity === "COMMON" && (
            <img id="gem"
                 src={common}
                 onMouseEnter={(e) => e.target.src=(commonGlow)}
                 onMouseLeave={(e) => e.target.src=(common)}
                 onClick={(e) => handleGuessClicked(e)}
                 className={minionStyles.gem}/>
           )}
           {rarity === "RARE" && (
            <img id="gem"
                 src={rare}
                 onMouseEnter={(e) => e.target.src=(rareGlow)}
                 onMouseLeave={(e) => e.target.src=(rare)}
                 onClick={(e) => handleGuessClicked(e)}
                 className={minionStyles.gem}/>
           )}
           {rarity === "EPIC" && (
            <img id="gem"
                 src={epic}
                 onMouseEnter={(e) => e.target.src=(epicGlow)}
                 onMouseLeave={(e) => e.target.src=(epic)}
                 onClick={(e) => handleGuessClicked(e)}
                 className={minionStyles.gem}/>
           )}
           {rarity === "LEGENDARY" && (<>
            <img id="gem"
                 src={legendary}
                 className={minionStyles.gem}
                 onMouseEnter={(e) => {
                    e.target.src=(legendaryGlow)
                    document.querySelector("#legendaryDragon").src=(legendaryDragonGlow)
                }}
                 onMouseLeave={(e) => {
                    e.target.src=(legendary)
                    document.querySelector("#legendaryDragon").src=(legendaryDragon)
                }}
                 onClick={(e) => handleGuessClicked(e)}/>
            <img id="legendaryDragon" 
                 src={legendaryDragon}
                 className={minionStyles.legendaryDragon}/>
           </>)}
        </>
    )
}

export default Gem