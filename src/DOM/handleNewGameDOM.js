function handleNewGameClickDOM() {
    document.querySelector("#newGame").classList.add("hidden")
    document.querySelector("#newGame").classList.remove("displayBlock")

    document.querySelector("#nothingWrong").classList.remove("hidden")
    document.querySelector("#nothingWrong").classList.add("displayBlock")

    document.querySelector("#xmark").classList.add("hidden")

    document.querySelector("#reasonForError").textContent = ""

    document.querySelector("#errorCard").classList.add("hidden")
    document.querySelector("#errorCard").src = `#`

    document.querySelector("#questionText").classList.add("hidden")
    document.querySelector("#questionRightArrow").classList.add("hidden")

    document.querySelector("#bookText").classList.add("hidden")
    document.querySelector("#bookRightArrow").classList.add("hidden")

    document.querySelector("#blocker").classList.add("hidden")


    if (document.querySelector("#customDisplay") != null) {
        document.querySelector("#customDisplay").classList.remove("hidden")
    }
}

export default handleNewGameClickDOM