function getRandomCard(cardsArray) {
    let cardSelected = {type: "HERO"}

    //currently only doing minions, hopefully doing more in future
    // CORE_ULD images are broken
    while (cardSelected.type != "MINION" || cardSelected.id.startsWith("CORE_ULD")) {
      const randI = Math.floor(Math.random() * (cardsArray.length - 0 + 1))
      cardSelected = cardsArray[randI]
    }
    console.log(cardSelected)
    return cardSelected
  
}

export default getRandomCard