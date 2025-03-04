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
    //   "artist": "Vladimir Kafanov",
    //   "attack": 2,
    //   "cardClass": "DRUID",
    //   "collectible": true,
    //   "cost": 3,
    //   "dbfId": 51791,
    //   "flavor": "Lifeweaving is all well and good until it's time to cut the thread.",
    //   "health": 5,
    //   "id": "DAL_355",
    //   "mechanics": [
    //     "TRIGGER_VISUAL"
    //   ],
    //   "name": "Lifeweaver",
    //   "rarity": "RARE",
    //   "set": "DALARAN",
    //   "text": "Whenever you restore Health, add a random Druid spell to your hand.",
    //   "type": "MINION"
    // }
    // return debug
    return cardSelected
  
}

export default getRandomCard