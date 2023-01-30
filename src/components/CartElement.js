import React, { useContext } from "react";
import { Context } from "../Context";
import {BsCartPlus, BsCartDash, BsCartX} from "react-icons/bs"

export default function CartElement({item}) {
    const {removeFromCart, addServing, removeServing} = useContext(Context)

    const price = item.servings * item.price

    return (
        <div className="cartelement">
            <span className="cartelement--name">{item.name} </span>
            <BsCartPlus onClick={() => addServing(item)} className="icon"/>
            <BsCartDash onClick={() => removeServing(item)} className="icon"/>
            <span className="cartelement--price">{item.servings} x {price} kr</span>
            <BsCartX onClick={() => removeFromCart(item.id)} className="icon cartelement--remove"/>
        </div>
    )
}