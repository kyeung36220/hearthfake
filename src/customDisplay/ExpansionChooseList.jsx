import {useState} from "react"

function ExpansionChooseList({availableExpansions, setAvailableExpansions}) {
           
    return (
        <div id="expansionsScreen" className="hidden">
            <div className="header">Choose What Expansions Your Card Will Be From</div>
            <div id="expansionsContainer">
                {availableExpansions && availableExpansions.map((expansion, index) => (
                    <div key={index} className="expansionCell">
                        <input type="checkbox"
                                key={Math.random}
                                defaultChecked={expansion.available}
                                onChange={() => handleCheckboxChange(expansion)}/>
                        <div className="expansionName">{expansion.display}</div>
                    </div>
                ))}
            </div>
            <button id="allSet" onClick={handleAllSetClick}>All Set</button>
            <button id="toggleAll"onClick={() => handleToggleAllClick()}>Toggle All (will reload page)</button>
        </div>
    )


    function handleCheckboxChange(expansion) {
        const newExpansionsArray = availableExpansions
        for (let i = 0; i < newExpansionsArray.length; i++) {
            if (newExpansionsArray[i].name === expansion.name) {
                newExpansionsArray[i].available = !newExpansionsArray[i].available
                break
            }
        }
        setAvailableExpansions(newExpansionsArray)
    }

    function handleAllSetClick() {
        document.querySelector("#expansionsScreen").classList.add("hidden")
        localStorage.setItem("expansionsArray", JSON.stringify(availableExpansions))
    }

    function handleToggleAllClick() {
        const newExpansionsArray = structuredClone(availableExpansions)
        for (let i = 0; i < newExpansionsArray.length; i++) {
            newExpansionsArray[i].available = !newExpansionsArray[i].available
        }
        setAvailableExpansions(newExpansionsArray)
        localStorage.setItem("expansionsArray", JSON.stringify(newExpansionsArray))
        window.location.reload()
    }
}

export default ExpansionChooseList