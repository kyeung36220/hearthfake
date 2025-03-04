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
    //   "artist": "Mike Sass",
    //   "attack": 3,
    //   "cardClass": "NEUTRAL",
    //   "collectible": true,
    //   "cost": 3,
    //   "countAsCopyOfDbfId": 79990,
    //   "dbfId": 115971,
    //   "flavor": "\"Look, the Sire said he wanted something more open concept...\"",
    //   "health": 3,
    //   "howToEarn": "Unlocked by completing the Tutorial.",
    //   "howToEarnGolden": "Unlocked after 2500 total wins.",
    //   "id": "CORE_REV_023",
    //   "mechanics": [
    //     "BATTLECRY",
    //     "TRADEABLE"
    //   ],
    //   "name": "Demolition Renovator",
    //   "rarity": "EPIC",
    //   "set": "CORE",
    //   "targetingArrowText": "Destroy an enemy \u003Cb\u003Elocation\u003C/b\u003E.",
    //   "text": "\u003Cb\u003ETradeable\u003C/b\u003E\n\u003Cb\u003EBattlecry:\u003C/b\u003E Destroy \nan enemy location.",
    //   "type": "MINION"
    // }
    // return debug
    return cardSelected
  
}

export default getRandomCard