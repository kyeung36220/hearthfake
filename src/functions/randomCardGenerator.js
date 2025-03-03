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
    //   "cardClass": "WARRIOR",
    //   "collectible": true,
    //   "cost": 2,
    //   "dbfId": 78262,
    //   "flavor": "No, Blizzard!",
    //   "id": "REV_337",
    //   "name": "Riot!",
    //   "rarity": "EPIC",
    //   "set": "REVENDRETH",
    //   "text": "[x]Your minions can't be \nreduced below 1 Health \nthis turn. They each attack \na random enemy minion.",
    //   "type": "SPELL"
    // }
    // return debug
    return cardSelected
  
}

export default getRandomCard