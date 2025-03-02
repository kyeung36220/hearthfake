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
    //   "artist": "Mike Azevedo",
    //   "cardClass": "WARLOCK",
    //   "collectible": true,
    //   "cost": 4,
    //   "dbfId": 111453,
    //   "flavor": "A purple stone Azari carved\nFor dark hearts, craving, power-starved.\nThe first to bow, the warlock Rin,\nEmbraced the darkness, slew her kin.",
    //   "howToEarn": "Unlocked with the Warlock class.",
    //   "howToEarnGolden": "Unlocked after winning 100 games as Warlock.",
    //   "id": "CORE_LOOT_043",
    //   "mechanics": [
    //     "LIFESTEAL"
    //   ],
    //   "name": "Lesser Amethyst Spellstone",
    //   "rarity": "RARE",
    //   "set": "CORE",
    //   "spellSchool": "SHADOW",
    //   "text": "\u003Cb\u003ELifesteal.\u003C/b\u003E Deal $3 damage to a minion. \u003Ci\u003E(Take damage from your cards to upgrade.)\u003C/i\u003E",
    //   "type": "SPELL"
    // }
    // return debug
    return cardSelected
  
}

export default getRandomCard