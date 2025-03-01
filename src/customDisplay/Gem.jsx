import common from "../assets/gems/common.png"
import commonGlow from "../assets/gems/commonGlow.png"
import rare from "../assets/gems/rare.png"
import rareGlow from "../assets/gems/rareGlow.png"
import epic from "../assets/gems/epic.png"
import epicGlow from "../assets/gems/epicGlow.png"
import legendary from "../assets/gems/legendary.png"
import legendaryGlow from "../assets/gems/legendaryGlow.png"

import minionStyles from "../styles/minionCard.module.css"
import minionLD from "../assets/legendaryDragons/minion/minionLD.png"
import minionLDGlow from "../assets/legendaryDragons/minion/minionLDGlow.png"

import spellStyles from "../styles/spellCard.module.css"
import spellLD from "../assets/legendaryDragons/spell/spellLD.png"
import spellLDGlow from "../assets/legendaryDragons/spell/spellLDGlow.png"

import weaponStyles from "../styles/weaponCard.module.css"
import weaponLD from "../assets/legendaryDragons/weapon/weaponLD.png"
import weaponLDGlow from "../assets/legendaryDragons/weapon/weaponLDGlow.png"

import heroStyles from "../styles/heroCard.module.css"
import heroLD from "../assets/legendaryDragons/hero/heroLD.png"
import heroLDGlow from "../assets/legendaryDragons/hero/heroLDGlow.png"

import locationStyles from "../styles/locationCard.module.css"
import locationLD from "../assets/legendaryDragons/location/locationLD.png"
import locationLDGlow from "../assets/legendaryDragons/location/locationLDGlow.png"

function Gem({currentCard, handleGuessClicked}) {
    const rarity = currentCard.rarity
    const stylesArray = [{type: "MINION", style: minionStyles, dragon: minionLD, dragonGlow: minionLDGlow},
                         {type: "SPELL", style: spellStyles, dragon: spellLD, dragonGlow: spellLDGlow},
                         {type: "WEAPON", style: weaponStyles, dragon: weaponLD, dragonGlow: weaponLDGlow},
                         {type: "HERO", style: heroStyles, dragon: heroLD, dragonGlow: heroLDGlow},
                         {type: "LOCATION", style: locationStyles, dragon: locationLD, dragonGlow: locationLDGlow},
    ]

    let styles
    let dragonStyle = {}
    for (let i = 0; i < stylesArray.length; i++) {
        if (stylesArray[i].type === currentCard.type) {
            styles = stylesArray[i].style
            dragonStyle.normal = stylesArray[i].dragon
            dragonStyle.glow = stylesArray[i].dragonGlow
            break
        }
    }

    return(
        <>
           {rarity === "COMMON" && (
            <img id="gem"
                 src={common}
                 onMouseEnter={(e) => e.target.src=(commonGlow)}
                 onMouseLeave={(e) => e.target.src=(common)}
                 onClick={(e) => handleGuessClicked(e)}
                 className={styles.gem}/>
           )}
           {rarity === "RARE" && (
            <img id="gem"
                 src={rare}
                 onMouseEnter={(e) => e.target.src=(rareGlow)}
                 onMouseLeave={(e) => e.target.src=(rare)}
                 onClick={(e) => handleGuessClicked(e)}
                 className={styles.gem}/>
           )}
           {rarity === "EPIC" && (
            <img id="gem"
                 src={epic}
                 onMouseEnter={(e) => e.target.src=(epicGlow)}
                 onMouseLeave={(e) => e.target.src=(epic)}
                 onClick={(e) => handleGuessClicked(e)}
                 className={styles.gem}/>
           )}
           {rarity === "LEGENDARY" && (<>
            <img id="gem"
                 src={legendary}
                 className={styles.gem}
                 onMouseEnter={(e) => {
                    e.target.src=(legendaryGlow)
                    document.querySelector("#legendaryDragon").src=(dragonStyle.glow)
                }}
                 onMouseLeave={(e) => {
                    e.target.src=(legendary)
                    document.querySelector("#legendaryDragon").src=(dragonStyle.normal)
                }}
                 onClick={(e) => handleGuessClicked(e)}/>
            <img id="legendaryDragon" 
                 src={dragonStyle.normal}
                 className={styles.legendaryDragon}/>
           </>)}
        </>
    )
}

export default Gem