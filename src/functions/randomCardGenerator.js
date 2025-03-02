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
    //   "artist": "Anton Zemskov",
    //   "cardClass": "ROGUE",
    //   "collectible": true,
    //   "cost": 0,
    //   "dbfId": 86092,
    //   "elite": true,
    //   "flavor": "Each time you cast a spell, transform this into a copy of its flavor text.",
    //   "hideStats": true,
    //   "id": "RLK_567",
    //   "name": "Shadow of Demise",
    //   "rarity": "LEGENDARY",
    //   "set": "RETURN_OF_THE_LICH_KING",
    //   "spellSchool": "SHADOW",
    //   "text": "Each time you cast a spell, transform this into a copy of it.",
    //   "type": "SPELL"
    // }
    // return debug
    return cardSelected
  
}

export default getRandomCard