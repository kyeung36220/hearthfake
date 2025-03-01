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
           || cardSelected.set === "HERO_SKINS" || cardSelected.rarity === "FREE") {
      const randI = Math.floor(Math.random() * (cardsArray.length - 0 + 1))
      cardSelected = cardsArray[randI]
    }

    //  const debug = {
    //   "artist": "James Ryman",
    //   "attack": 6,
    //   "cardClass": "DEMONHUNTER",
    //   "collectible": true,
    //   "cost": 6,
    //   "dbfId": 68061,
    //   "elite": true,
    //   "flavor": "This is what happens when you keep taking the advice of the little demon on your shoulder.",
    //   "health": 6,
    //   "id": "AV_267",
    //   "mechanics": [
    //     "BATTLECRY"
    //   ],
    //   "name": "Caria Felsoul",
    //   "rarity": "LEGENDARY",
    //   "set": "ALTERAC_VALLEY",
    //   "text": "\u003Cb\u003EBattlecry:\u003C/b\u003E Transform into a 6/6 copy of a Demon in your deck.",
    //   "type": "MINION"
    // }
    //  return debug
    return cardSelected
  
}

export default getRandomCard