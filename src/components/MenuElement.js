import React, {useContext} from "react";
import { Context } from "./../Context";
import {BsCartPlus} from "react-icons/bs"

export default function MenuElement(props) {
    const items = props.props
    const {addToCart} = useContext(Context)
    const iconSize = "24"

    function handleClick(newItem) {
        addToCart(newItem)
    }
    
    return (
        items.map(element => {
                return (
                <div key={element.id} className="menuelement">
                    <p className="menuelement--name">{element.name}</p>
                    <p className="menuelement--price">Price:{element.price} kr</p>
                    {element.allergens.length === 0 ? null : <p>Allergens: {element.allergens.join(", ")}</p>}
                    <BsCartPlus
                        size={iconSize}
                        className="icon"
                        onClick={() => handleClick(element)}
                    >Add to cart</BsCartPlus>
                </div>
                )
            })
    )
}
