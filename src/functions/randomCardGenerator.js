function getRandomCard(cardsArray) {
    let cardSelected = {type: "HERO"}
    while (cardSelected.type != "MINION") { //currently only doing minions, hopefully doing more in future
      const randI = Math.floor(Math.random() * (cardsArray.length - 0 + 1))
      cardSelected = cardsArray[randI]
    }
    console.log(cardSelected)
    return cardSelected
  
}

export default getRandomCard