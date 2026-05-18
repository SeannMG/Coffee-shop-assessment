import { render, screen } from "@testing-library/react"
import Shop from "../Pages/Shop"
import { describe, it, expect} from "vitest"
import { CartContext } from "../context/CartContext"
import Cart from "../Pages/Cart"

describe("Shop Page", () => {
    it("renders shop heading", () => {
        render(
            <CartContext.Provider value={{
                cart: [],
                addToCart: () => {}
            }}>
                <Shop />
            </CartContext.Provider>
        )
        expect(screen.getByText(/shop coffee/i)).toBeInTheDocument()
    })
})