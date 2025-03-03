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
    //   "artist": "A.J. Nazzaro",
    //   "attack": 2,
    //   "cardClass": "PALADIN",
    //   "collectible": true,
    //   "cost": 3,
    //   "dbfId": 72810,
    //   "elite": true,
    //   "flavor": "An orc mage accidentally kited him all the way from Stratholme.",
    //   "health": 2,
    //   "id": "AV_345",
    //   "mechanics": [
    //     "RUSH",
    //     "TRIGGER_VISUAL"
    //   ],
    //   "name": "Saidan the Scarlet",
    //   "rarity": "LEGENDARY",
    //   "set": "ALTERAC_VALLEY",
    //   "text": "\u003Cb\u003ERush.\u003C/b\u003E Whenever this minion gains Attack or Health, double that amount \u003Ci\u003E(wherever this is)\u003C/i\u003E.",
    //   "type": "MINION"
    // }
    // return debug
    return cardSelected
  
}

export default getRandomCard