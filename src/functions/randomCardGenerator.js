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
           || cardSelected.set === "CORE" && cardSelected.name.endsWith("Spellstone")){
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
    //   "artist": "Nicola Saviori",
    //   "attack": 6,
    //   "cardClass": "DRUID",
    //   "collectible": true,
    //   "collectionText": "\u003Cb\u003EChoose One -\u003C/b\u003E {0}; or {1}.",
    //   "cost": 5,
    //   "dbfId": 110940,
    //   "elite": true,
    //   "flavor": "Uluu is such a tryhard, he's carrying an entire planet!",
    //   "health": 5,
    //   "id": "GDB_854",
    //   "name": "Uluu, the Everdrifter",
    //   "race": "BEAST",
    //   "races": [
    //     "BEAST"
    //   ],
    //   "rarity": "LEGENDARY",
    //   "referencedTags": [
    //     "CHOOSE_ONE"
    //   ],
    //   "set": "SPACE",
    //   "text": "[x]Each turn this is in your\nhand, gain two random\n\u003Cb\u003EChoose One\u003C/b\u003E choices.",
    //   "type": "MINION"
    // }
    // return debug
    return cardSelected
  
}

export default getRandomCard