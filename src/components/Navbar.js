import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom"
import { Context } from "../Context";
import {BsCart, BsCartFill} from "react-icons/bs"

export default function Navbar() {
    const {resetMenu, cartItems} = useContext(Context)
    const [empty, setEmpty] = useState(true)
    const [count, setCount] = useState(0)

    useEffect(() => {
        setEmpty(cartItems.length === 0 ? true : false)
        setCount(function reduce() {
            
            const servingsInCart = []
            cartItems.map(item => {
                servingsInCart.push(item.servings)
                return servingsInCart
            })
            
            const initialValue = 0
            const sum = servingsInCart.reduce((accumulator, currentValue) => accumulator + currentValue,
            initialValue)
            return sum
        
    })}, [cartItems])

    function cartIcon() {
        return empty 
        ? <div><BsCart /> Cart</div>
        : <div>{count} <BsCartFill /> Cart</div>
    }

    return (
        <nav className="navbar">
            <ul className="navbar--links">
                <li><Link to="/">Home</Link></li>
                <li onClick={() => resetMenu()}><Link to="/menu">Menu</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/cart"> {cartIcon()}</Link></li>
            </ul>
        </nav>
    )
}