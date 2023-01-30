import React, {useContext, useState} from "react";
import { Context } from "./../Context";
import {BsCartPlus} from "react-icons/bs"

export default function MenuElement(props) {
    const {addToCart, showAllergens} = useContext(Context)
    const items = props.props
    const iconSize = "24"

    function handleClick(newItem) {
        addToCart(newItem)
    }

    return (
        items.map(element => {
            const keywords = []
            keywords.push(element.type, element.ingredient, element.allergens)
                return (
                <div key={element.id} className="menuelement">
                    <p className="menuelement--name">{element.name}</p>
                    {showAllergens && <p className="menuelement--allergens">Allergens: {element.allergens.join(", ")}</p>}
                    <p className="menuelement--price">Price:{element.price} kr</p>
                    <BsCartPlus
                        size={iconSize}
                        className="menuelement--icon"
                        onClick={() => handleClick(element)}
                    >Add to cart</BsCartPlus>
                </div>
                )
            })
    )
}
