import legacy from "../assets/sets/legacy.webp"
import basic from "../assets/sets/basic.webp"
import naxx from "../assets/sets/naxx.webp"
import gvg from "../assets/sets/gvg.webp"
import brm from "../assets/sets/brm.webp"
import tgt from "../assets/sets/tgt.webp"
import loe from "../assets/sets/loe.webp"
import og from "../assets/sets/og.webp"
import kara from "../assets/sets/kara.webp"
import gangs from "../assets/sets/gangs.webp"
import ungoro from  "../assets/sets/ungoro.webp"
import icc from "../assets/sets/icc.webp"
import loot from "../assets/sets/loot.webp"
import gil from "../assets/sets/gil.webp"
import boom from "../assets/sets/boom.webp"
import trl from "../assets/sets/trl.webp"
import dal from "../assets/sets/dal.webp"
import uldum from "../assets/sets/uldum.webp"
import dragons from "../assets/sets/dragons.webp"
import gala from "../assets/sets/gala.webp"
import dhi from "../assets/sets/dhi.webp"
import ashes from "../assets/sets/ashes.webp"
import sch from "../assets/sets/sch.webp"
import dmf from "../assets/sets/dmf.webp"
import bar from "../assets/sets/bar.webp"
import sw from "../assets/sets/sw.webp"
import av from "../assets/sets/av.webp"
import sc from "../assets/sets/sc.webp"
import rev from "../assets/sets/rev.webp"
import poa from "../assets/sets/poa.webp"
import rlk from "../assets/sets/rlk.webp"
import cot from "../assets/sets/cot.webp"
import botb from "../assets/sets/botb.webp"
import ttn from "../assets/sets/ttn.webp"
import ww from "../assets/sets/ww.webp"
import event from "../assets/sets/event.webp"
import whiz from "../assets/sets/whiz.webp"
import pr from "../assets/sets/pr.webp"
import gdb from "../assets/sets/gdb.webp"

import minionStyles from "../styles/minionCard.module.css"
import spellStyles from "../styles/spellCard.module.css"
import weaponStyles from "../styles/weaponCard.module.css"
import heroStyles from "../styles/heroCard.module.css"
import locationStyles from "../styles/locationCard.module.css"

function Emblem({currentCard}) {

    const sets = [{name: "LEGACY", image: legacy},
                  {name: "VANILLA", image: legacy},
                  {name: "PLACEHOLDER_202204", image: basic},
                  {name: "CORE", image: basic},
                  {name: "EXPERT1", image: basic},
                  {name: "LEGACY", image: basic},
                  {name: "NAXX", image: naxx},
                  {name: "GVG", image: gvg},
                  {name: "BRM", image: brm},
                  {name: "TGT", image: tgt},
                  {name: "LOE", image: loe},
                  {name: "OG", image: og},
                  {name: "KARA", image: kara},
                  {name: "GANGS", image: gangs},
                  {name: "UNGORO", image: ungoro},
                  {name: "ICECROWN", image: icc},
                  {name: "LOOTAPALOOZA", image: loot},
                  {name: "GILNEAS", image: gil},
                  {name: "BOOMSDAY", image: boom},
                  {name: "TROLL", image: trl},
                  {name: "DALARAN", image: dal},
                  {name: "ULDUM", image: uldum},
                  {name: "DRAGONS", image: dragons},
                  {name: "YEAR_OF_THE_DRAGON", image: gala},
                  {name: "DEMON_HUNTER_INITIATE", image: dhi},
                  {name: "BLACK_TEMPLE", image: ashes},
                  {name: "SCHOLOMANCE", image: sch},
                  {name: "DARKMOON_FAIRE", image: dmf},
                  {name: "THE_BARRENS", image: bar},
                  {name: "STORMWIND", image: sw},
                  {name: "ALTERAC_VALLEY", image: av},
                  {name: "THE_SUNKEN_CITY", image: sc},
                  {name: "REVENDRETH", image: rev},
                  {name: "PATH_OF_ARTHAS", image: poa},
                  {name: "RETURN_OF_THE_LICH_KING", image: rlk},
                  {name: "WONDERS", image: cot},
                  {name: "BATTLE_OF_THE_BANDS", image: botb},
                  {name: "TITANS", image: ttn},
                  {name: "WILD_WEST", image: ww},
                  {name: "EVENT", image: event},
                  {name: "WHIZBANGS_WORKSHOP", image: whiz},
                  {name: "ISLAND_VACATION", image: pr},
                  {name: "SPACE", image: gdb},]

    const stylesArray = [{type: "MINION", style: minionStyles},
                         {type: "SPELL", style: spellStyles},
                         {type: "WEAPON", style: weaponStyles},
                         {type: "HERO", style: heroStyles},
                         {type: "LOCATION", style: locationStyles}]
    
    let styles
    for (let i = 0; i < stylesArray.length; i++) {
        if (stylesArray[i].type === currentCard.type) {
            styles = stylesArray[i].style
            break
        }
    }

    for (let i = 0; i < sets.length; i++) {
        if (sets[i].name === currentCard.set) {
            return(<img id="emblem"
                        src={sets[i].image}
                        className={styles.emblem}/>)
        }
    }

    console.error(`Set image for ${currentCard.set} not found, this app probably needs an update`)
    return(<img id="emblem"
                src={legacy}
                className={styles.emblem}/>)
}

export default Emblem