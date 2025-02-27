function getRandomCard(cardsArray) {
    let cardSelected = {type: "HERO"}

    //currently only doing minions, hopefully doing more in future
    // CORE_ULD images are broken
    while (cardSelected.type != "MINION" || cardSelected.id.startsWith("CORE_ULD")) {
      const randI = Math.floor(Math.random() * (cardsArray.length - 0 + 1))
      cardSelected = cardsArray[randI]
    }

    // const temp = {
    //   "artist": "James Ryman",
    //   "attack": 7,
    //   "cardClass": "PALADIN",
    //   "collectible": true,
    //   "cost": 7,
    //   "dbfId": 78086,
    //   "elite": true,
    //   "flavor": "3 Legendary Invitations, AH AH AH!",
    //   "health": 7,
    //   "id": "REV_951",
    //   "mechanics": [
    //     "BATTLECRY"
    //   ],
    //   "name": "The Countess",
    //   "rarity": "LEGENDARY",
    //   "set": "REVENDRETH",
    //   "text": "[x]\u003Cb\u003EBattlecry:\u003C/b\u003E If your deck \nhas no Neutral cards, add \n3 \u003Cb\u003ELegendary \u003C/b\u003EInvitations \nto your hand.",
    //   "type": "MINION"
    // }
    // return temp
    return cardSelected
  
}

export default getRandomCard