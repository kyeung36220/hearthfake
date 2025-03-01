function getRandomCard(cardsArray) {
    let cardSelected = {}

    const validCardTypes = ["WEAPON", "MINION", "SPELL", "HERO", "LOCATION"]


    //currently only doing minions, hopefully doing more in future
    // CORE_ULD images are broken
    // Vanilla set has some issues with spell schools
    // CORE_BOT has some broken images
    // HERO_SKINS is just the skin for default heros
    while (!validCardTypes.includes(cardSelected.type) || cardSelected.id.startsWith("CORE_ULD") 
           || cardSelected.set === "VANILLA" || cardSelected.id.startsWith("CORE_BOT")
           || cardSelected.set === "HERO_SKINS") {
      const randI = Math.floor(Math.random() * (cardsArray.length - 0 + 1))
      cardSelected = cardsArray[randI]
    }

    //  const debug = {
    //   "artist": "Anton Zemskov",
    //   "attack": 3,
    //   "cardClass": "PALADIN",
    //   "classes": [
    //     "PALADIN",
    //     "PRIEST"
    //   ],
    //   "collectible": true,
    //   "cost": 4,
    //   "dbfId": 59587,
    //   "elite": true,
    //   "flavor": "She's all about hitting the books. Literally.",
    //   "health": 6,
    //   "id": "SCH_141",
    //   "mechanics": [
    //     "SPELLBURST"
    //   ],
    //   "name": "High Abbess Alura",
    //   "race": "DRAENEI",
    //   "races": [
    //     "DRAENEI"
    //   ],
    //   "rarity": "LEGENDARY",
    //   "set": "SCHOLOMANCE",
    //   "text": "\u003Cb\u003E\u003Cb\u003ESpellburst\u003C/b\u003E:\u003C/b\u003E Cast a spell from your deck \u003Ci\u003E(targets this if possible)\u003C/i\u003E.",
    //   "type": "MINION"
    // }
    //  return debug
    return cardSelected
  
}

export default getRandomCard