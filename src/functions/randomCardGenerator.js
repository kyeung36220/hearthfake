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
    //   "artist": "Ian Ameling",
    //   "attack": 1,
    //   "cardClass": "ROGUE",
    //   "collectible": true,
    //   "cost": 3,
    //   "dbfId": 86483,
    //   "flavor": "To defend Naxxramas from the oncoming adventurers, the Scourge created a monstrosity the world had never seen before: an abomination wearing clothes!!",
    //   "health": 1,
    //   "id": "NX2_005",
    //   "isMiniSet": true,
    //   "mechanics": [
    //     "COMBO",
    //     "INFUSE",
    //     "MANATHIRST"
    //   ],
    //   "name": "Stitched Creation",
    //   "race": "UNDEAD",
    //   "races": [
    //     "UNDEAD"
    //   ],
    //   "rarity": "RARE",
    //   "set": "RETURN_OF_THE_LICH_KING",
    //   "text": "\u003Cb\u003ECombo:\u003C/b\u003E Gain +2/+2.\n\u003Cb\u003EInfuse ({0}):\u003C/b\u003E Gain +3/+3. \u003Cb\u003EManathirst ({1}):\u003C/b\u003E Gain +4/+4.",
    //   "type": "MINION"
    // }
    // return debug
    return cardSelected
  
}

export default getRandomCard