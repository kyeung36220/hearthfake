function handleNewGameClickDOM() {
    document.querySelector("#newGame").classList.add("hidden")
    document.querySelector("#newGame").classList.remove("displayBlock")
    document.querySelector("#nothingWrong").classList.remove("hidden")
    document.querySelector("#nothingWrong").classList.add("displayBlock")
    document.querySelector("#xmark").classList.add("hidden")
    document.querySelector("#reasonForError").textContent = ""

    if (document.querySelector("#customDisplay") != null) {
        document.querySelector("#customDisplay").classList.remove("hidden")
    }
}

export default handleNewGameClickDOM