import { render, screen} from "@testing-library/react"
import Cart from "../Pages/Cart"
import { describe, it, expect } from "vitest"
import { CartContext } from "../context/CartContext"

describe("Cart Page", () => {
    it("shows empty cart message", () => {
        render(
            <CartContext.Provider value ={{ cart: [], removeFromCart: () => {}, clearCart: () => {} }}>
                <Cart />
            </CartContext.Provider>
        )

        expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    })
})