import { NavLink } from "react-router-dom"

function Navbar() {

    return (
        <nav>
            <h1>Coffee R Us</h1>

            <div>
                <NavLink to="/">Home</NavLink>
            </div>
        </nav>
    )
}

export default Navbar