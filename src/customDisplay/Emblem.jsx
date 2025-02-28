import legacy from "../assets/sets/legacy.png"
import basic from "../assets/sets/basic.png"
import naxx from "../assets/sets/naxx.png"
import gvg from "../assets/sets/gvg.png"
import brm from "../assets/sets/brm.png"
import tgt from "../assets/sets/tgt.png"
import loe from "../assets/sets/loe.png"
import og from "../assets/sets/og.png"
import kara from "../assets/sets/kara.png"
import gangs from "../assets/sets/gangs.png"
import ungoro from  "../assets/sets/ungoro.png"
import icc from "../assets/sets/icc.png"
import loot from "../assets/sets/loot.png"
import gil from "../assets/sets/gil.png"
import boom from "../assets/sets/boom.png"
import trl from "../assets/sets/trl.png"
import dal from "../assets/sets/dal.png"
import uldum from "../assets/sets/uldum.png"
import dragons from "../assets/sets/dragons.png"
import gala from "../assets/sets/gala.png"
import dhi from "../assets/sets/dhi.png"
import ashes from "../assets/sets/ashes.png"
import sch from "../assets/sets/sch.png"
import dmf from "../assets/sets/dmf.png"
import bar from "../assets/sets/bar.png"
import sw from "../assets/sets/sw.png"
import av from "../assets/sets/av.png"
import sc from "../assets/sets/sc.png"
import rev from "../assets/sets/rev.png"
import poa from "../assets/sets/poa.png"
import rlk from "../assets/sets/rlk.png"
import cot from "../assets/sets/cot.png"
import botb from "../assets/sets/botb.png"
import ttn from "../assets/sets/ttn.png"
import ww from "../assets/sets/ww.png"
import event from "../assets/sets/event.png"
import whiz from "../assets/sets/whiz.png"
import pr from "../assets/sets/pr.png"
import gdb from "../assets/sets/gdb.png"

import minionStyles from "../styles/minionCard.module.css"

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
                  {name: "SPACE", image: gdb}
    ]

    for (let i = 0; i < sets.length; i++) {
        if (sets[i].name === currentCard.set) {
            return(<img id="emblem"
                        src={sets[i].image}
                        className={minionStyles.emblem}/>)
        }
    }

    console.error(`Set image for ${currentCard.set} not found, this app probably needs an update`)
    return(<img id="emblem"
                src={legacy}
                className={minionStyles.emblem}/>)
}

export default Emblem