import React, {useContext, useState} from "react";
import MenuElement from "../components/MenuElement";
import { Context } from "../Context";
import Button from "../components/ButtonElement"

export default function Menu() {
    const {menu, filteredMenu, chosenFilters, setFilteredMenu, setChosenFilters} = useContext(Context)

    return (
        <main className="menu">
            <h1>Menu</h1>
            <Button props={{type: "soup", name: "Soup"}}/>
            <Button props={{ingredient: "beef", name: "Beef"}}/>
            
            <button onClick={() => (setFilteredMenu(menu), setChosenFilters([]))}>Reset</button>
            <br />
            {chosenFilters.join(", ")}
            <MenuElement props={filteredMenu.length === 0 && chosenFilters.length === 0 ? menu : filteredMenu} />
            <br />
            {chosenFilters.length !== 0 && filteredMenu.length === 0 ? "No dishes available" : null}
        </main>
    )
}

