function getRandomCard(cardsArray) {
    let cardSelected = {}

    const validCardTypes = ["WEAPON", "MINION", "SPELL", "HERO", "LOCATION"]


    //currently only doing minions, hopefully doing more in future
    // CORE_ULD images are broken
    // Vanilla set has some issues with spell schools
    // CORE_BOT has some broken images
    // HERO_SKINS is just the skin for default heros
    while (!validCardTypes.includes(cardSelected.type) || cardSelected.id.startsWith("CORE_ULD") 
           || cardSelected.set === "VANILLA" || cardSelected.id.startsWith("CORE_BOT")
           || cardSelected.set === "HERO_SKINS") {
      const randI = Math.floor(Math.random() * (cardsArray.length - 0 + 1))
      cardSelected = cardsArray[randI]
    }

    //  const debug = {
    //   "armor": 5,
    //   "artist": "Mooncolony",
    //   "cardClass": "NEUTRAL",
    //   "collectible": true,
    //   "cost": 10,
    //   "dbfId": 103471,
    //   "elite": true,
    //   "flavor": "With an uncertain past and a questionable future, Reno was lucky to find his home on the range.",
    //   "health": 30,
    //   "heroPowerDbfId": 103472,
    //   "id": "WW_0700",
    //   "mechanics": [
    //     "BATTLECRY"
    //   ],
    //   "name": "Reno, Lone Ranger",
    //   "rarity": "LEGENDARY",
    //   "set": "WILD_WEST",
    //   "text": "[x]\u003Cb\u003EBattlecry:\u003C/b\u003E If your deck\nstarted with no duplicates,\nremove all enemy minions\nfrom the game.",
    //   "type": "HERO"
    // }
    //  return debug
    return cardSelected
  
}

export default getRandomCard