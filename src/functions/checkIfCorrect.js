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
    else if (currentCard.wrong === "text") {
        if (e.target.id === "textContainer" || e.target.id === "textContent" || e.target.id === "text" || e.target.offsetParent.id === "textContent") {
            return true
        }
    }
    else if (currentCard.wrong === "race") {
        const raceContainers = ["raceContent", "raceContainer", "raceText", "dualRaceContent", "dualRaceContainer", "secondRaceText"]
        if (raceContainers.includes(e.target.id)) {
            return true
        }
    }
    else if (currentCard.wrong === "spellSchool") {
        const schoolContainers = ["spellSchoolContainer", "spellSchoolText"]
        if (schoolContainers.includes(e.target.id)) {
            return true
        }
    }
    else if (currentCard.wrong === "durability" || currentCard.wrong === "locationDurability") {
        const containers = ["durabilityNumber", "durability"]
        if (containers.includes(e.target.id)) {
            return true
        }
    }
    else if (currentCard.wrong === "armor") {
        const containers = ["armorNumber", "armor"]
        if (containers.includes(e.target.id)) {
            return true
        }
    }
    return false
}

export default isGuessCorrect