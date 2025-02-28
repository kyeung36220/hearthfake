function getRandomCard(cardsArray) {
    let cardSelected = {type: "HERO"}

    //currently only doing minions, hopefully doing more in future
    // CORE_ULD images are broken
    while (cardSelected.type != "MINION" || cardSelected.id.startsWith("CORE_ULD")) {
      const randI = Math.floor(Math.random() * (cardsArray.length - 0 + 1))
      cardSelected = cardsArray[randI]
    }

    // const temp =  {
    //   "artist": "Alex Alexandrov",
    //   "attack": 6,
    //   "cardClass": "NEUTRAL",
    //   "collectible": true,
    //   "cost": 4,
    //   "dbfId": 40950,
    //   "flavor": "Hair products are 79% of his monthly budget.",
    //   "health": 5,
    //   "id": "CFM_665",
    //   "name": "Worgen Greaser",
    //   "rarity": "COMMON",
    //   "set": "GANGS",
    //   "type": "MINION"
    // }
    // return temp
    return cardSelected
  
}

export default getRandomCard