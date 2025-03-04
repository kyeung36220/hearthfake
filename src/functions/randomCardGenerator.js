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

     const debug = {
      "artist": "Mike Sass",
      "attack": 3,
      "cardClass": "NEUTRAL",
      "collectible": true,
      "cost": 2,
      "dbfId": 69662,
      "faction": "ALLIANCE",
      "flavor": "He's not really all that crazy, he is just not as careful with explosives as he should be.",
      "health": 2,
      "howToEarn": "Unlocked by completing the Tutorial.",
      "howToEarnGolden": "Unlocked after 500 total wins.",
      "id": "CORE_EX1_082",
      "mechanics": [
        "BATTLECRY"
      ],
      "name": "Mad Bomber",
      "rarity": "COMMON",
      "set": "CORE",
      "text": "\u003Cb\u003EBattlecry:\u003C/b\u003E Deal 3 damage randomly split between all other characters.",
      "type": "MINION"
    }
    return debug
    return cardSelected
  
}

export default getRandomCard