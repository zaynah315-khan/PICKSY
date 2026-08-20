import { useState } from "react";
import {
  addProduct,
  deleteProduct
} from "../services/productService";

function AdminPortal({
  products
}) {
  const [form, setForm] = useState({
    name: "",
    category: "Accessories",
    price: "",
    image: "",
    description: ""
  });

  const [message, setMessage] =
    useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await addProduct({
        name: form.name,
        category: form.category,
        price: Number(form.price),
        image: form.image,
        description: form.description,
        featured: false
      });

      setMessage("Product added successfully.");

      setForm({
        name: "",
        category: "Accessories",
        price: "",
        image: "",
        description: ""
      });

    } catch (error) {
      setMessage(error.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteProduct(id);
      setMessage("Product deleted.");
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <main className="admin-page">

      <div className="container">

        <div className="page-heading">
          <p className="eyebrow">
            PICKSY ADMIN
          </p>

          <h1>
            Product Portal
          </h1>
        </div>

        <div className="admin-grid">

          <form
            className="admin-form"
            onSubmit={handleSubmit}
          >

            <h2>
              Add Product
            </h2>

            <label>
              Product Name
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label>
              Category
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option>Accessories</option>
              <option>Beauty</option>
              <option>Skincare</option>
            </select>

            <label>
              Price
            </label>

            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
            />

            <label>
              Image URL
            </label>

            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="/images/product.jpg"
              required
            />

            <label>
              Description
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="4"
            />

            <button className="primary-button">
              Add Product
            </button>

            {message && (
              <p className="admin-message">
                {message}
              </p>
            )}

          </form>

          <div className="admin-products">

            <h2>
              Current Products
            </h2>

            {products.map((product) => (
              <div
                className="admin-product"
                key={product.id}
              >

                <img
                  src={product.image}
                  alt={product.name}
                />

                <div>
                  <h3>
                    {product.name}
                  </h3>

                  <p>
                    {product.category}
                  </p>
                </div>

                <button
                  className="remove-button"
                  onClick={() =>
                    handleDelete(product.id)
                  }
                >
                  Delete
                </button>

              </div>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}

export default AdminPortal;