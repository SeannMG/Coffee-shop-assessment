import { NavLink } from "react-router-dom"

function Navbar() {

    return (
        <nav>
            <h1>Coffee R Us</h1>

            <div className="navbar">
                <NavLink to="/" className='nav-link'>Home</NavLink>
                <NavLink to="/shop" className='nav-link'>Shop</NavLink>
                <NavLink to="/cart" className='nav-link'>cart</NavLink>
                <NavLink to="/admin" className='nav-link'>Admin</NavLink>

            </div>
        </nav>
    )
}

export default Navbar