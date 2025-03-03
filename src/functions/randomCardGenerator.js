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
    //   "artist": "Paul Kwon",
    //   "attack": 2,
    //   "cardClass": "PRIEST",
    //   "collectible": true,
    //   "cost": 2,
    //   "dbfId": 95746,
    //   "flavor": "When you're at the bottom, there's nowhere to ascend, but up.",
    //   "health": 3,
    //   "howToEarn": "Unlocked with Priest class.",
    //   "howToEarnGolden": "Unlocked after winning 50 games as Priest.",
    //   "id": "CORE_ICC_210",
    //   "mechanics": [
    //     "TRIGGER_VISUAL"
    //   ],
    //   "name": "Shadow Ascendant",
    //   "race": "UNDEAD",
    //   "races": [
    //     "UNDEAD"
    //   ],
    //   "rarity": "COMMON",
    //   "set": "CORE",
    //   "text": "[x]At the end of your turn,\ngive another random\nfriendly minion +1/+1.",
    //   "type": "MINION"
    // }
    // return debug
    return cardSelected
  
}

export default getRandomCard