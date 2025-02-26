function adjustCard(correctCard) {
    const thingsThatCanBeWrong = ["cost", "health", "attack"]
    const randI = Math.floor(Math.random() * (2 - 0 + 1))

    if (thingsThatCanBeWrong[randI] === "cost") {
        return adjustCost(correctCard)
    }
    else if (thingsThatCanBeWrong[randI] === "health") {
        return adjustHealth(correctCard)
    }
    else if (thingsThatCanBeWrong[randI] === "attack") {
        return adjustAttack(correctCard)
    }

    console.error("Card not adjusted")
}

function adjustCost(card) {
    const newCard = card
    const randI = Math.floor(Math.random() * (2 - 0 + 1))
    if (randI === 0 || newCard.cost === 0) {
        newCard.cost = newCard.cost + 1
    }
    else {
        newCard.cost = newCard.cost - 1
    }
    newCard.wrong = 'cost'
    return newCard
}

function adjustHealth(card) {
    const newCard = card
    const randI = Math.floor(Math.random() * (2 - 0 + 1))
    if (randI === 0 || newCard.health === 1) {
        newCard.health = newCard.health + 1
    }
    else {
        newCard.health = newCard.health - 1
    }
    newCard.wrong = 'health'
    return newCard
}

function adjustAttack(card) {
    const newCard = card
    const randI = Math.floor(Math.random() * (2 - 0 + 1))
    if (randI === 0 || newCard.attack === 0) {
        newCard.attack = newCard.attack + 1
    }
    else {
        newCard.attack = newCard.attack - 1
    }
    newCard.wrong = 'attack'
    return newCard
}

export default adjustCard