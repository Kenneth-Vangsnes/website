import React, {useContext} from "react";
import MenuElement from "../components/MenuElement";
import { Context } from "../Context";
import Button from "../components/ButtonElement"
import {BsToggleOff, BsToggleOn} from "react-icons/bs"

export default function Menu() {
    const {
        menu, 
        filteredMenu, 
        chosenFilters, 
        setFilteredMenu, 
        setChosenFilters, 
        setShowAllergens,
        showAllergens,
    } = useContext(Context)
    
    function toggleSliderForAllergens() {
        if(showAllergens) {
            return <span className="showAllergens" onClick={() => setShowAllergens(false)}><BsToggleOn />Show Allergens</span>
        } else {
            return <span className="showAllergens" onClick={() => setShowAllergens(true)}><BsToggleOff />Show Allergens</span>
        }
    }

    return (
        <main className="menu">
            <h1>Menu</h1>
            <Button props={{type: "soup", name: "Soup"}}/>
            <Button props={{ingredient: "beef", name: "Beef"}}/>
            <Button props={{name: "Reset"}}
                    onClick={() => (setFilteredMenu(menu), setChosenFilters([]))}
                    />
            
            <br />
            {chosenFilters.join(", ")}
            {toggleSliderForAllergens()}
            <MenuElement props={filteredMenu.length === 0 && chosenFilters.length === 0 ? menu : filteredMenu} />
            <br />
            {chosenFilters.length !== 0 && filteredMenu.length === 0 ? "No dishes available" : null}
        </main>
    )
}

