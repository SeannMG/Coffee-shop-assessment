import { useEffect, useState } from "react";

function Admin() {
    const [products, setProducts] = useState([])

    const [form, setForm] = useState({
        name: "",
        price: "",
        description: ""
    })

    const[editingId, setEditingId] = useState([])

    // GET PRODUCTS
    useEffect(() => {
        fetch("http://localhost:3000/products")
        .then(res => res.json())
        .then( data => setProducts(data))
        .catch(err => console.log(err))
    }, [])

    // HANDLE INPUT
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // ADD PRODUCT (POST)
    const addProduct = () => {
        const newProduct = {
            ...form,
            price: Number(form.price)
        }

        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            setProducts([...products, data])
            setForm({name: "", price: "", description: ""})
        })
    }

    // DELETE PRODUCT (DELETE)
    const deleteProduct = (id) => {
        fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE"
        }).then(() => {
            setProducts(products.filter(p => p.id !==id))
        })
    }

    // START EDIT
    const startEdit = (product) => {
        setForm({
            name: product.name,
            price: product.price,
            description: product.description
        })

        setEditingId(product.id)
    }

    // UPDATE PRODUCT (PATCH)
    const updateProduct = () => {
        fetch(`http://localhost:3000/products/${editingId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...form,
                price: Number(form.price)
            })
        })
        .then(res => res.json())
        .then(updateProduct => {
            setProducts(
                products.map(p => p.id === editingId ? updateProduct : p)
            )

            setEditingId(null)
            setForm({ name: "", price: "", description: ""})
        })
    }

    return (
        <div className="shop-container">
            <h1>Admin Portal</h1>

            {/* FORM */}
            <div className="card">
                <h2>{editingId ? "Edit Product" : "Add Product"}</h2>

                <input  
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                />

                <input  
                name="price"
                placeholder="Price"
                value={form.price}
                onChange={handleChange}
                />

                <input  
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                />

                <button onClick={editingId ? updateProduct : addProduct}
                style={{
                backgroundColor: editingId ? "orange" : "brown",
                color: "white",
                marginTop: "10px",
                padding: "10px"

                }}
                > {editingId ? "Update Product" : "Add Product"} </button>
            </div>

            {/* PRODUCTS LIST */}
            <div className="shop-grid">
                {products.map(product => (
                    <div key={product.id} className="card">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p><b>${product.price}</b></p>

                        <button 
                        onClick={() => startEdit(product)}
                        style={{
                            marginRight: "10px",
                            backgroundColor: "blue",
                            color: "white"
                        }}>Edit</button>

                        <button
                        onClick={() => deleteProduct(product.id)}
                        style={{
                            backgroundColor: "red",
                            color: "white"
                        }}>Delete</button>
                        
                        </div>
                ))}
            </div>
        </div>
    )
}

export default Admin