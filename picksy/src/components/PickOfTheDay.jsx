function PickOfTheDay({
  product,
  onAdd
}) {
  if (!product) {
    return null;
  }

  return (
    <section className="pick-section">

      <div className="container">

        <div className="pick-card">

          <div className="pick-image">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="pick-content">

            <p className="eyebrow">
              PICK OF THE DAY
            </p>

            <h2>
              {product.name}
            </h2>

            <p>
              {product.description}
            </p>

            <div className="pick-price">
              Rs. {product.price.toLocaleString()}
            </div>

            <button
              className="primary-button"
              onClick={() => onAdd(product)}
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PickOfTheDay;