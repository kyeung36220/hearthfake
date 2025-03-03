function getRandomCard(cardsArray, availableExpansions) {
    let cardSelected = {}

    const validCardTypes = ["WEAPON", "MINION", "SPELL", "HERO", "LOCATION"]

    // CORE_ULD images are broken
    // CORE_BOT has some broken images
    // Vanilla set has some issues with spell schools
    // HERO_SKINS is just the skin for default heros
    // PLACEHOLDER_202204 are dupes
    // CORE spellstones collection text is wrong
    while (!validCardTypes.includes(cardSelected.type) 
           || inExpansionsList(cardSelected.set) === false
           || cardSelected.id.startsWith("CORE_ULD") 
           || cardSelected.id.startsWith("CORE_BOT")
           || cardSelected.set === "VANILLA" && cardSelected.type === "SPELL" 
           || cardSelected.set === "HERO_SKINS" 
           || cardSelected.set === "PLACEHOLDER_202204"
           || cardSelected.set === "CORE" && cardSelected.name.endsWith("Spellstone")
           || !cardSelected.collectionText && /\{0}/.test(cardSelected.text)){
      const randI = Math.floor(Math.random() * (cardsArray.length - 0 + 1))
      cardSelected = cardsArray[randI]
    }

    function inExpansionsList(set) {
      for (let i = 0; i < availableExpansions.length; i++) {
        if (availableExpansions[i].name === set && availableExpansions[i].available === true) {
          return true
        }
      }
      return false
    }

    //  const debug = {
    //   "artist": "L. Lullabi & K. Turovec",
    //   "attack": 3,
    //   "cardClass": "NEUTRAL",
    //   "collectible": true,
    //   "cost": 5,
    //   "dbfId": 97112,
    //   "elite": true,
    //   "flavor": "Everything but the kitchen sink. Oh wait, there's one on his back.",
    //   "hasDiamondSkin": true,
    //   "health": 2,
    //   "howToEarn": "Unlocked by completing the Tutorial.",
    //   "howToEarnGolden": "Unlocked after 5000 total wins.",
    //   "id": "CORE_BOT_548",
    //   "mechanics": [
    //     "DIVINE_SHIELD",
    //     "LIFESTEAL",
    //     "MAGNETIC",
    //     "RUSH",
    //     "TAUNT"
    //   ],
    //   "name": "Zilliax",
    //   "race": "MECHANICAL",
    //   "races": [
    //     "MECHANICAL"
    //   ],
    //   "rarity": "LEGENDARY",
    //   "set": "PLACEHOLDER_202204",
    //   "text": "\u003Cb\u003EMagnetic\u003C/b\u003E\n\u003Cb\u003E\u003Cb\u003EDivine Shield\u003C/b\u003E, \u003Cb\u003ETaunt\u003C/b\u003E, Lifesteal, Rush\u003C/b\u003E",
    //   "type": "MINION"
    // }
    // return debug
    return cardSelected
  
}

export default getRandomCard