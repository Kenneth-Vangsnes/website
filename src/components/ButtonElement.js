import React, {useState, useContext, useEffect} from "react"
import { Context } from "../Context"

export default function Button(props) {
    const [open, setOpen] = useState(false)
    const [allergensInDishes, setAllergensInDishes] = useState([])
    const {menu, filteredMenu, setFilteredMenu, setChosenFilters} = useContext(Context)
    const property = props.props
    
    useEffect(() => {
        setAllergensInDishes()
    }, [filteredMenu])
    
    function chooseTypeOfDish(property) {
        const sortedMenu = menu
        if(property.hasOwnProperty("type") === true) {
            const filtered = sortedMenu.filter(item => item.type === property.type)
            setFilteredMenu(filtered)
        }
    }

    /* 
    function menuFiltering(property) {
        const sortedMenu = filteredMenu.length === 0 ? menu : filteredMenu
        if(property.hasOwnProperty("type") === true) {
            const filtered = sortedMenu.filter(item => item.type === property.type)
            setFilteredMenu(filtered)
            setChosenFilters(prevValues => [...prevValues, property.type])
        } else if(property.hasOwnProperty("ingredient") === true) {
            const filtered = sortedMenu.filter(item => item.ingredient.includes(property.ingredient))
            setFilteredMenu(filtered)
            setChosenFilters(prevValues => [...prevValues, property.ingredient])
        } else if(property.hasOwnProperty("allergens") === true) {
            const filtered = []
            sortedMenu.map(item => item.allergens.includes(property.allergens) ? null : filtered.push(item)) 
            setFilteredMenu(filtered)
            setChosenFilters(prevValues => [...prevValues, property.allergens])
        } 
        setOpen(oldState => !oldState)
    } */

    return (
        <button
            className="buttonElement"
            onClick={() => chooseTypeOfDish(property)}
        >
            {property.name}
        </button>
    )
}