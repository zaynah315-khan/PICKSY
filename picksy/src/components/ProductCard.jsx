function ProductCard({
  product,
  onAdd
}) {
  return (
    <article className="product-card">

      <div className="product-image">

        {product.featured && (
          <span className="product-badge">
            Pick
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <h3>
          {product.name}
        </h3>

        <div className="product-bottom">

          <strong>
            Rs. {Number(product.price).toLocaleString()}
          </strong>

          <button
            className="add-button"
            onClick={() => onAdd(product)}
          >
            +
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;