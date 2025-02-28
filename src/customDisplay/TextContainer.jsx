import minionTextContainer from "../assets/text/minion/minionText.png"
import minionTextContainerGlow from "../assets/text/minion/minionTextGlow.png"
import spellTextContainer from "../assets/text/spell/spellText.png"
import spellTextContainerGlow from "../assets/text/spell/spellTextGlow.png"
import minionStyles from "../styles/minionCard.module.css"

function TextContainer({currentCard, handleGuessClicked}) {
    
    let cleanText = currentCard.text
    if (currentCard.collectionText) {
        cleanText = currentCard.collectionText.replace("[x]", "").trim().replace("$", "").trim().replace("#", "").trim().replace("\\n", "<br />")
    }
    else if (currentCard.text) {
        cleanText = currentCard.text.replace("[x]", "").trim().replace("$", "").trim().replace("#", "").trim().replace("\n", "<br />").replace("<i>", "<e>").replace("</i>", "</e>")
    }

    let isCharTooMuch = false
    if (currentCard.text) {
        isCharTooMuch = cleanText.length > 100 ? true : false
    }
    
    return(<>
        {currentCard.type === "MINION" && (<>
            <div id="textContent" className={isCharTooMuch ? minionStyles.smallSizeText : 
                                                             minionStyles.normalSizeText}
                                  onMouseEnter={() => document.querySelector("#textContainer").src =  minionTextContainerGlow}
                                  onMouseLeave={() => document.querySelector("#textContainer").src = minionTextContainer}
                                  onClick={(e) => handleGuessClicked(e)}>
                <div id="text" dangerouslySetInnerHTML={{ __html: cleanText }}></div>
            </div>
            <img id="textContainer" 
                src={minionTextContainer}
                onMouseEnter={(e) => e.target.src=( minionTextContainerGlow)}
                onMouseLeave={(e) => e.target.src=(minionTextContainer)}
                onClick={(e) => handleGuessClicked(e)}
                className={minionStyles.textContainer}/>
        </>)}
        {currentCard.type === "SPELL" && (<>
            <div id="textContent" className={isCharTooMuch ? minionStyles.smallSizeText : 
                                                             minionStyles.normalSizeText}
                                  onMouseEnter={() => document.querySelector("#textContainer").src =  spellTextContainerGlow}
                                  onMouseLeave={() => document.querySelector("#textContainer").src = spellTextContainer}
                                  onClick={(e) => handleGuessClicked(e)}>
                <div id="text" dangerouslySetInnerHTML={{ __html: cleanText }}></div>
            </div>
            <img id="textContainer" 
                src={spellTextContainer}
                onMouseEnter={(e) => e.target.src=(spellTextContainerGlow)}
                onMouseLeave={(e) => e.target.src=(spellTextContainer)}
                onClick={(e) => handleGuessClicked(e)}
                className={minionStyles.textContainer}/>
        </>)}

    </>)
}

export default TextContainer