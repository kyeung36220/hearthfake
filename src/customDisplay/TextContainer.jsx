import textContainer from "../assets/text/textContainer.png"
import textContainerGlow from "../assets/text/textContainerGlow.png"

function TextContainer({currentCard, handleGuessClicked}) {
    
    let cleanText = currentCard.text
    if (currentCard.collectionText) {
        cleanText = currentCard.collectionText.replace("[x]", "").trim().replace("$", "").trim().replace("#", "").trim().replace("\\n", "<br />")
    }
    else if (currentCard.text) {
        cleanText = currentCard.text.replace("[x]", "").trim().replace("$", "").trim().replace("#", "").trim().replace("\n", "<br />").replace("<i>", "<e>").replace("</i>", "</e>")
    }

    let isCharTooMuch = cleanText.length > 120 ? true : false
    
    return(<>
        <div id="textContent" className={isCharTooMuch ? `smallSizeText` : `normalSizeText`}
           onMouseEnter={() => document.querySelector("#textContainer").src = textContainerGlow}
           onMouseLeave={() => document.querySelector("#textContainer").src = textContainer}
           onClick={(e) => handleGuessClicked(e)}>
           <div id="text" dangerouslySetInnerHTML={{ __html: cleanText }}></div>
        </div>
        <img id="textContainer" 
             src={textContainer}
             onMouseEnter={(e) => e.target.src=(textContainerGlow)}
             onMouseLeave={(e) => e.target.src=(textContainer)}
             onClick={(e) => handleGuessClicked(e)}/>

    </>)
}

export default TextContainer