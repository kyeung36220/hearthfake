function isGuessCorrect(e, isCurrentCardWrong, currentCard) {
    if (isCurrentCardWrong === false && e.target.id === "nothingWrong") {
        return true
    }
    else if (currentCard.wrong === "cost") {
        if (e.target.id === "manaNumber" || e.target.id === "mana") {
            return true
        }
    }
    else if (currentCard.wrong === "health") {
        if (e.target.id === "healthNumber" || e.target.id === "health") {
            return true
        }
    }
    else if (currentCard.wrong === "attack") {
        if (e.target.id === "attackNumber" || e.target.id === "attack") {
            return true
        }
    }
    else if (currentCard.wrong === "gem") {
        if (e.target.id === "gem") {
            return true
        }
    }
    return false
}

export default isGuessCorrect