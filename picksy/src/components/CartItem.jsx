function CartItem({
  item,
  onRemove,
  onUpdate
}) {
  return (
    <div className="cart-item">

      <img
        src={item.image}
        alt={item.name}
      />

      <div className="cart-item-info">

        <p>{item.category}</p>

        <h3>{item.name}</h3>

        <strong>
          Rs. {item.price.toLocaleString()}
        </strong>

      </div>

      <div className="quantity-control">

        <button
          onClick={() =>
            onUpdate(item.id, item.quantity - 1)
          }
        >
          −
        </button>

        <span>
          {item.quantity}
        </span>

        <button
          onClick={() =>
            onUpdate(item.id, item.quantity + 1)
          }
        >
          +
        </button>

      </div>

      <button
        className="remove-button"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>

    </div>
  );
}

export default CartItem;