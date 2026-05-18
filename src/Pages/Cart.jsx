import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext)

    // TOTAL
    const total = cart.reduce((sum, item) => {
        return sum + Number(item.price)
    }, 0)

    // BUY
    const handleBuy = () => {
        alert("Purchase successful! Thank you")
        clearCart()
    }

    return (
        <div className="shop-container">
            <h1>Your Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                {cart.map(item => (
                    <div key={item.id} className="card">
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>

                        {/* REMOVE BUTTON */}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))}

                {/* TOTAL */}
                <h2>Total: ${total.toFixed(2)}</h2>

                {/* BUY BUTTON */}
                <button onClick={handleBuy} style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    cursor: "pointer"
                }}>Buy</button>
                </>
            )}
        </div>
    )
}

export default Cart