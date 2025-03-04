import textCleaner from "../functions/textCleaner"

import minionTextContainer from "../assets/text/minion/minionText.webp"
import minionTextContainerGlow from "../assets/text/minion/minionTextGlow.webp"
import minionStyles from "../styles/minionCard.module.css"

import spellTextContainer from "../assets/text/spell/spellText.webp"
import spellTextContainerGlow from "../assets/text/spell/spellTextGlow.webp"
import spellStyles from "../styles/spellCard.module.css"

import weaponTextContainer from "../assets/text/weapon/weaponText.webp"
import weaponTextContainerGlow from "../assets/text/weapon/weaponTextGlow.webp"
import weaponStyles from "../styles/weaponCard.module.css"

import heroTextContainer from "../assets/text/hero/heroText.webp"
import heroTextContainerGlow from "../assets/text/hero/heroTextGlow.webp"
import heroStyles from "../styles/heroCard.module.css"

import locationTextContainer from "../assets/text/location/locationText.webp"
import locationTextContainerGlow from "../assets/text/location/locationTextGlow.webp"
import locationStyles from "../styles/locationCard.module.css"

function TextContainer({currentCard, handleGuessClicked}) {
    
    let cleanText = currentCard.text
    if (currentCard.collectionText && !/\{0}/g.test(currentCard.collectionText)) {
        cleanText = textCleaner(currentCard.collectionText)
    }
    else if (currentCard.text) {
        cleanText = textCleaner(currentCard.text)
    }

    let isCharTooMuch = false
    if (currentCard.text) {
        isCharTooMuch = cleanText.length > 90 ? true : false
    }
    if (currentCard.type === "LOCATION" && cleanText.length > 70) {
        isCharTooMuch = true
    }

    const cardTypes = [{type: "MINION", style: minionStyles, container: minionTextContainer, containerGlow: minionTextContainerGlow},
                       {type: "SPELL", style: spellStyles, container: spellTextContainer, containerGlow: spellTextContainerGlow},
                       {type: "WEAPON", style: weaponStyles, container: weaponTextContainer, containerGlow: weaponTextContainerGlow},
                       {type: "HERO", style: heroStyles, container: heroTextContainer, containerGlow: heroTextContainerGlow},
                       {type: "LOCATION", style: locationStyles, container: locationTextContainer, containerGlow: locationTextContainerGlow}]

    let styles
    let containerImg
    let containerImgGlow
    for (let i = 0; i < cardTypes.length; i++) {
        if (currentCard.type === cardTypes[i].type) {
            styles = cardTypes[i].style
            containerImg = cardTypes[i].container
            containerImgGlow = cardTypes[i].containerGlow
            break
        }
    }
    
    return(<>
        <>
            <div id="textContent" className={isCharTooMuch ? styles.smallSizeText : styles.normalSizeText}
                                  onMouseEnter={() => document.querySelector("#textContainer").src =  containerImgGlow}
                                  onMouseLeave={() => document.querySelector("#textContainer").src = containerImg}
                                  onClick={(e) => handleGuessClicked(e)}>
                <div id="text" dangerouslySetInnerHTML={{ __html: cleanText }}></div>
            </div>
            <img id="textContainer" 
                src={containerImg}
                onMouseEnter={(e) => e.target.src=(containerImgGlow)}
                onMouseLeave={(e) => e.target.src=(containerImg)}
                onClick={(e) => handleGuessClicked(e)}
                className={styles.textContainer}/>
        </>
    </>)
}

export default TextContainer