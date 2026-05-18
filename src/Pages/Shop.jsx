import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

function Shop() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const { cart, addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch("http://localhost:3000/products")
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.log(err))
    }, [])

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))

 
    return (
        <div className="shop-container" >
            <h1>Shop Coffee</h1>

            {/* CART */}
            <h3>Cart: {cart.length}</h3>

            {/* SEARCH */}
            <input
            placeholder="Search coffee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

            {/* PRODUCTS */}
            <div className="shop-grid">
                {filteredProducts.map(product => (
                    <div key={product.id} className="card">

                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p><b>${product.price}</b></p>

                        {/* ADD TO CART BUTTON */}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>

                        </div>
                ))}
            </div>
        </div>
    )

    
}

export default Shop