import coffeeImage from "../assets/coffee.jpg"

function Home() {
    return (

        <div className="home">

            {/* HERO SECTION */}

            <section className="hero">
                <div className="hero-text">
                    <h1>Coffee R Us</h1>
                    <p>Premium coffee beans sourced globally. Fresh. Bold.</p>

                    <button>Explore Shop</button>

                </div>

                    <img src={coffeeImage} alt="Coffee" />

            </section>

            {/* FEATURES */}

            <section className="features">
                <div className="card">
                    <h3>High Quality Beans</h3>
                    <p>Only the best farms around the world.</p>
                </div>

                <div className="card">
                    <h3>Fast Delivery</h3>
                    <p>Quick and reliable shipping system.</p>
                </div>

                <div className="card">
                    <h3>Admin Control</h3>
                    <p>Manage all products easily</p>
                </div>
            </section>
        </div>
    )
}

export default Home