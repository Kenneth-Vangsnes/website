import React, {useContext, useState, useEffect} from "react";
import MenuElement from "../components/MenuElement";
import { Context } from "../Context";
import Button from "../components/ButtonElement"
import {BsToggleOff, BsToggleOn} from "react-icons/bs"

export default function Menu() {
    const {
        menu, 
        filteredMenu, 
        chosenFilters, 
        setShowAllergens,
        showAllergens,
    } = useContext(Context)
    const [typesOfDish, setTypeOfDish] = useState([])

    useEffect(() => {
            setTypeOfDish(() => {const arrayOfType = []
            menu.map(element => arrayOfType.push(element.type))
            function onlyUnique(value, index, self) {
                return self.indexOf(value) === index
            }
            const uniqueTypeOfDish = arrayOfType.filter(onlyUnique)
            return uniqueTypeOfDish
            })
    }, [])
    console.log(typesOfDish)
    
    function toggleSliderForAllergens() {
        if(showAllergens) {
            return <span className="showAllergens" onClick={() => setShowAllergens(false)}><BsToggleOn />Show Allergens</span>
        } else {
            return <span className="showAllergens" onClick={() => setShowAllergens(true)}><BsToggleOff />Show Allergens</span>
        }
    }

    const buttonElement = 
        typesOfDish.map(typeOfDish => {
            return <Button props={{type: typeOfDish, name: typeOfDish}} />
        })
    

    return (
        <main className="menu">
            <h1>Menu</h1>
            {buttonElement}
            <button onClick={() => window.location.reload(true)}>Reset</button>
            <br />
            {chosenFilters.join(", ")}
            {toggleSliderForAllergens()}
            <MenuElement props={filteredMenu.length === 0 && chosenFilters.length === 0 ? menu : filteredMenu} />
            <br />
            {chosenFilters.length !== 0 && filteredMenu.length === 0 ? "No dishes available" : null}
        </main>
    )
}

