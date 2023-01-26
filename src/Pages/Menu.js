import React, {useContext, useState} from "react";
import MenuElement from "../components/MenuElement";
import { Context } from "../Context";

export default function Menu() {
    const {menu} = useContext(Context)
    const [filteredMenu, setFilteredMenu] = useState([])
    const [chosenFilters, setChosenFilters] = useState([])

    function filter(props) {
        const sortedMenu = filteredMenu.length === 0 ? menu : filteredMenu

        if(props.hasOwnProperty("type") === true) {
            const filtered = sortedMenu.filter(item => item.type === props.type)
            setFilteredMenu(filtered)
            setChosenFilters(prevValues => [...prevValues, props.type])
        } else if(props.hasOwnProperty("ingredient") === true) {
            const filtered = sortedMenu.filter(item => item.ingredient.includes(props.ingredient))
            setFilteredMenu(filtered)
            setChosenFilters(prevValues => [...prevValues, props.ingredient])
        } else if(props.hasOwnProperty("allergens") === true) {
            const filtered = []
            sortedMenu.map(item => item.allergens.includes(props.allergens) ? null : filtered.push(item)) 
            setFilteredMenu(filtered)
            setChosenFilters(prevValues => [...prevValues, props.allergens])
        } 
    }

    return (
        <main className="menu">
            <h1>Menu</h1>
            Type:
            <button onClick={() => filter({type: "appetizer"})}>Appetizer</button>
            <button onClick={() => filter({type: "soup"})}>Soup</button>
            <br />
            Main ingredient:
            <button onClick={() => filter({ingredient: "chicken"})}>Chicken</button>
            <button onClick={() => filter({ingredient: "beef"})}>Beef</button>
            <br />
            Allergens:  
            <button onClick={() => filter({allergens: "peanuts"})}>Peanuts</button>
            <button onClick={() => filter({allergens: "gluten"})}>Gluten</button>

            <br />
            <button onClick={() => (setFilteredMenu(menu), setChosenFilters([]))}>Reset</button>
            <br />
            {chosenFilters.join(", ")}
            <MenuElement props={filteredMenu.length === 0 ? menu : filteredMenu} />
        </main>
    )
}

