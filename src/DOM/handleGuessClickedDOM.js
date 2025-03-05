import capitalizeFirstLetter from "../functions/capFirstLetter"

function handleGuessClickedDOM(e, isGuessCorrectBool,currentCard, isCurrentCardWrong) {
    document.querySelector("#nothingWrong").classList.add("hidden")
    document.querySelector("#nothingWrong").classList.remove("displayBlock")

    if (isGuessCorrectBool === true) {
        document.querySelector("#customDisplay").classList.add("hidden")
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

        document.querySelector("#errorCard").classList.remove("hidden")
        document.querySelector("#errorCard").src = `https://a-amen.github.io/hsfakedump.github.io/assets/images/${currentCard.id}.webp`

        document.querySelector("#blocker").classList.remove("hidden")

        if (isCurrentCardWrong === false) {
            document.querySelector("#reasonForError").textContent = `Card was correct`
        }
        else {
            if (currentCard.wrong === "spellSchool") {
                document.querySelector("#reasonForError").textContent  = `Spell school was wrong.`
            }
            else {
                document.querySelector("#reasonForError").textContent  = 
                `${capitalizeFirstLetter(currentCard.wrong)} was wrong.`
            }
        }
        return
    }
    console.error("handleGuessClickedDOM Error")
}

export default handleGuessClickedDOM