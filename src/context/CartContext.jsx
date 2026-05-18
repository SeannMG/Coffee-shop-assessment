
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || []
    })

    // SAVE CART WHEN REFRESHED
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])


    // ADD ITEM
    const addToCart = (product) => {
        setCart([...cart, product])
    }

    // REMOVE ITEM
    const removeFromCart = (id) => {
        const index = cart.findIndex(item => item.id === id)
        if (index === -1) return;

        const newCart = [...cart]
        newCart.splice(index, 1)
        setCart(newCart)
    }

    // CLEAR CARY AFTER BUYING
    const clearCart = () => {
        setCart([])
    }
        

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}