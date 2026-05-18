import { NavLink } from "react-router-dom"

function Navbar() {

    return (
        <nav>
            <h1>Coffee R Us</h1>

            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/cart">cart</NavLink>

            </div>
        </nav>
    )
}

export default Navbar