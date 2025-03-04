import common from "../assets/gems/common.webp"
import commonGlow from "../assets/gems/commonGlow.webp"
import rare from "../assets/gems/rare.webp"
import rareGlow from "../assets/gems/rareGlow.webp"
import epic from "../assets/gems/epic.webp"
import epicGlow from "../assets/gems/epicGlow.webp"
import legendary from "../assets/gems/legendary.webp"
import legendaryGlow from "../assets/gems/legendaryGlow.webp"

import minionStyles from "../styles/minionCard.module.css"
import minionLD from "../assets/legendaryDragons/minion/minionLD.webp"
import minionLDGlow from "../assets/legendaryDragons/minion/minionLDGlow.webp"

import spellStyles from "../styles/spellCard.module.css"
import spellLD from "../assets/legendaryDragons/spell/spellLD.webp"
import spellLDGlow from "../assets/legendaryDragons/spell/spellLDGlow.webp"

import weaponStyles from "../styles/weaponCard.module.css"
import weaponLD from "../assets/legendaryDragons/weapon/weaponLD.webp"
import weaponLDGlow from "../assets/legendaryDragons/weapon/weaponLDGlow.webp"

import heroStyles from "../styles/heroCard.module.css"
import heroLD from "../assets/legendaryDragons/hero/heroLD.webp"
import heroLDGlow from "../assets/legendaryDragons/hero/heroLDGlow.webp"

import locationStyles from "../styles/locationCard.module.css"
import locationLD from "../assets/legendaryDragons/location/locationLD.webp"
import locationLDGlow from "../assets/legendaryDragons/location/locationLDGlow.webp"

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