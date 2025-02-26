import capitalizeFirstLetter from "../functions/capFirstLetter"

function handleGuessClickedDOM(e, isGuessCorrectBool,currentCard, isCurrentCardWrong) {
    document.querySelector("#customDisplay").classList.add("hidden")
    document.querySelector("#nothingWrong").classList.add("hidden")
    document.querySelector("#nothingWrong").classList.remove("displayBlock")

    if (isGuessCorrectBool === true) {
        document.querySelector("#checkmark").classList.remove("hidden")

        setTimeout(() => {
            document.querySelector("#nothingWrong").classList.remove("hidden")
            document.querySelector("#nothingWrong").classList.add("displayBlock")
            document.querySelector("#customDisplay").classList.remove("hidden")
            document.querySelector("#checkmark").classList.add("hidden")
        },"1000")
        return
    }
    else if (isGuessCorrectBool === false){
        document.querySelector("#xmark").classList.remove("hidden")
        document.querySelector("#newGame").classList.remove("hidden")
        document.querySelector("#newGame").classList.add("displayBlock")

        if (isCurrentCardWrong === false) {
            document.querySelector("#reasonForError").textContent = `Card was correct`
        }
        else {
            document.querySelector("#reasonForError").textContent  = 
            `${capitalizeFirstLetter(currentCard.wrong)} was wrong.`
        }
        return
    }
    console.error("handleGuessClickedDOM Error")
}

export default handleGuessClickedDOM