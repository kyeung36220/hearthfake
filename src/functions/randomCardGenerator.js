function getRandomCard(cardsArray) {
    let cardSelected = {type: "HERO"}

    //currently only doing minions, hopefully doing more in future
    // CORE_ULD images are broken
    while (cardSelected.type != "MINION" || cardSelected.id.startsWith("CORE_ULD")) {
      const randI = Math.floor(Math.random() * (cardsArray.length - 0 + 1))
      cardSelected = cardsArray[randI]
    }

    const temp =  {
      "artist": "Luke Mancini",
      "attack": 7,
      "cardClass": "NEUTRAL",
      "collectible": true,
      "cost": 7,
      "dbfId": 41286,
      "flavor": "What happens when a dinosaur mixes soda and pop rocks.",
      "health": 7,
      "id": "UNG_099",
      "mechanics": [
        "BATTLECRY",
        "CHARGE"
      ],
      "name": "Charged Devilsaur",
      "race": "BEAST",
      "races": [
        "ELEMENTAL",
        "BEAST"
      ],
      "rarity": "EPIC",
      "set": "UNGORO",
      "text": "\u003Cb\u003ECharge\u003C/b\u003E\n\u003Cb\u003EBattlecry:\u003C/b\u003E Can't attack heroes this turn.",
      "type": "MINION"
    }
    return temp
  
}

export default getRandomCard