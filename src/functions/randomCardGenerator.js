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

     const debug = {
      "artist": "Max Grecke",
      "attack": 6,
      "cardClass": "DRUID",
      "collectible": true,
      "cost": 6,
      "dbfId": 94250,
      "elite": true,
      "flavor": "Despite having only 3 digits on each hand, Zok plays Bass like he has 5.",
      "health": 6,
      "id": "ETC_386",
      "mechanics": [
        "BATTLECRY"
      ],
      "name": "Zok Fogsnout",
      "race": "QUILBOAR",
      "races": [
        "QUILBOAR"
      ],
      "rarity": "LEGENDARY",
      "referencedTags": [
        "TAUNT"
      ],
      "set": "BATTLE_OF_THE_BANDS",
      "text": "[x]\u003Cb\u003EBattlecry:\u003C/b\u003E Summon two\n{0}/{1} Quilboar with \u003Cb\u003ETaunt\u003C/b\u003E.\n \u003Ci\u003E(Improved by your hero Attack \n  & Armor gained this turn!)\u003C/i\u003E",
      "type": "MINION"
    }
    return debug
    return cardSelected
  
}

export default getRandomCard