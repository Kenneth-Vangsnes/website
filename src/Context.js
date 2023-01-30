import React, {useState} from "react";
import {food} from "./data/data"

const Context = React.createContext()

function ContextProvider({children}) {
    const [cartItems, setCartItems] = useState([])
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const [menu, setMenu] = useState(food)
    const [filteredMenu, setFilteredMenu] = useState([])
    const [chosenFilters, setChosenFilters] = useState([])

    function openMenu () {
        setIsMenuOpen(prevState => !prevState)
    }

    function addToCart(newItem) {
        if(cartItems.length === 0) {
            setCartItems([newItem])
        } else {
            addServing(newItem)
        }
    }
    
    function addServing(item) {
        setCartItems(cartItems => {
            const array = []
            function ifInCartAddOne() {
                for(let i = 0; i < cartItems.length; i++) {
                    if(cartItems[i].id === item.id) {
                        array.push({...cartItems[i], servings: cartItems[i].servings + 1})
                    } else array.push(cartItems[i])
                }
            }
            
            function notFound() {
                const found = cartItems.find(element => element.id === item.id) ? true : false
                if(found === false) {
                    array.push(item)
                }
            } 

            ifInCartAddOne()
            notFound()
            return array
        })
        }
        
    function removeServing(item) {
      
        const array = []
        for(let i = 0; i < cartItems.length; i++) {
            if(cartItems[i].id === item.id) {
                array.push({...item, servings: item.servings - 1})
            } else array.push(cartItems[i])
        }
        setCartItems(array.filter(ele => ele.servings !== 0))
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function resetMenu() {
        setMenu(food)
    }

    return (
        <Context.Provider value={{
                cartItems, 
                isMenuOpen, 
                menu,
                filteredMenu,
                chosenFilters,
                setChosenFilters,
                setFilteredMenu,
                addServing,
                removeServing,
                addToCart, 
                removeFromCart,
                openMenu, 
                setMenu, 
                resetMenu,
                setCartItems}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}