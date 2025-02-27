import textContainer from "../assets/text/textContainer.png"
import textContainerGlow from "../assets/text/textContainerGlow.png"

function TextContainer({currentCard, handleGuessClicked}) {
    
    const cleanText = currentCard.text.replace("[x]", "").trim().replace("$", "").trim()
    return(<>
        <div id="textContent"
           onMouseEnter={() => document.querySelector("#textContainer").src = textContainerGlow}
           onMouseLeave={() => document.querySelector("#textContainer").src = textContainer}
           onClick={(e) => handleGuessClicked(e)}>
           <div dangerouslySetInnerHTML={{ __html: cleanText }}></div>
        </div>
        <img id="textContainer" 
             src={textContainer}
             onMouseEnter={(e) => e.target.src=(textContainerGlow)}
             onMouseLeave={(e) => e.target.src=(textContainer)}
             onClick={(e) => handleGuessClicked(e)}/>

    </>)
}

export default TextContainer