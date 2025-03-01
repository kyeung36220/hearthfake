import weaponAttackImg from "../assets/customOverlay/weaponAttack.png"
import weaponAttackGlowImg from "../assets/customOverlay/weaponAttackGlow.png"
import weaponStyles from "../styles/weaponCard.module.css"

function WeaponAttack({currentCard, handleGuessClicked}) {
    return(<>
        <a id="attackNumber"
            onMouseEnter={() => document.querySelector("#attack").src = weaponAttackGlowImg}
            onMouseLeave={() => document.querySelector("#attack").src = weaponAttackImg}
            onClick={(e) => handleGuessClicked(e)}
            className={weaponStyles.attackNumber}>
        {currentCard.attack}</a>
        <img id="attack" 
            src={weaponAttackImg}
            onMouseEnter={(e) => e.target.src=(weaponAttackGlowImg)}
            onMouseLeave={(e) => e.target.src=(weaponAttackImg)}
            onClick={(e) => handleGuessClicked(e)}
            className={weaponStyles.attack}/>
    </>)
}

export default WeaponAttack