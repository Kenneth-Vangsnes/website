import React, { useContext } from "react";
import { Context } from "../Context";
import {BsCartPlus, BsCartDash, BsCartX} from "react-icons/bs"

export default function CartElement({item}) {
    const {removeFromCart, addServing, removeServing} = useContext(Context)

    const price = item.servings * item.price

    return (
        <div className="cartelement">
            {item.name} 
            <BsCartPlus onClick={() => addServing(item)} className="icon"/>
            <BsCartDash onClick={() => removeServing(item)} className="icon"/>
            {item.servings} x {price} kr
            <BsCartX onClick={() => removeFromCart(item.id)} className="icon"/>
        </div>
    )
}