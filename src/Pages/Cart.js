import React, {useContext, useState, useEffect} from "react";
import { Context } from "../Context";
import CartElement from "../components/CartElement";

export default function Cart() {
    const {cartItems} = useContext(Context)
    const [totalAmount, setTotalAmount] = useState(0)

     const cartItemElement = cartItems.map(item => {
        return (
            <CartElement key={item.id} item={item}/>
        )
    })

    useEffect(() => {
        const array = []
        cartItems.map(item => array.push(item.price * item.servings))
        const sumArray = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        setTotalAmount(sumArray)
    }, [cartItems])
    
    return (
        <div className="cart">
            <h2>Check Out</h2>
            {cartItemElement}
            <hr />
            <p>Total: {totalAmount} kr </p>
        </div>
    )
}