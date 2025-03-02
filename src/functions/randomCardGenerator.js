function getRandomCard(cardsArray) {
    let cardSelected = {}

    const validCardTypes = ["WEAPON", "MINION", "SPELL", "HERO", "LOCATION"]

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
    //   "artist": "Gabe from Penny Arcade",
    //   "attack": 6,
    //   "cardClass": "NEUTRAL",
    //   "collectible": true,
    //   "cost": 5,
    //   "dbfId": 111462,
    //   "elite": true,
    //   "faction": "ALLIANCE",
    //   "flavor": "At least he has Angry Chicken.",
    //   "health": 2,
    //   "howToEarn": "Unlocked by completing the Tutorial.",
    //   "howToEarnGolden": "Unlocked after 5000 total wins.",
    //   "id": "CORE_EX1_116",
    //   "mechanics": [
    //     "BATTLECRY",
    //     "CHARGE"
    //   ],
    //   "name": "Leeroy Jenkins",
    //   "rarity": "LEGENDARY",
    //   "set": "CORE",
    //   "text": "\u003Cb\u003ECharge\u003C/b\u003E. \u003Cb\u003EBattlecry:\u003C/b\u003E Summon two 1/1 Whelps for your opponent.",
    //   "type": "MINION"
    // }
    //  return debug
    return cardSelected
  
}

export default getRandomCard