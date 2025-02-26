function getRandomCard(cardsArray) {
    let cardSelected = {type: "HERO"}
    while (cardSelected.type != "MINION") { //currently only doing minions, hopefully doing more in future
      const randI = Math.floor(Math.random() * (cardsArray.length - 0 + 1))
      cardSelected = cardsArray[randI]
    }
    return cardSelected
  
}

export default getRandomCard