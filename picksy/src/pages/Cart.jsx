import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart({
  cart,
  cartTotal,
  onRemove,
  onUpdate
}) {
  if (cart.length === 0) {
    return (
      <main className="cart-page">

        <div className="empty-cart">

          <div className="empty-icon">
            ♡
          </div>

          <h1>
            Your cart is empty
          </h1>

          <p>
            Looks like you haven't picked
            anything yet.
          </p>

          <Link
            to="/"
            className="primary-button"
          >
            Start Shopping
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="cart-page">

      <div className="container">

        <div className="page-heading">
          <p className="eyebrow">
            YOUR PICKS
          </p>

          <h1>
            Shopping Cart
          </h1>
        </div>

        <div className="cart-layout">

          <div className="cart-items">

            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={onRemove}
                onUpdate={onUpdate}
              />
            ))}

          </div>

          <aside className="cart-summary">

            <h2>
              Order Summary
            </h2>

            <div className="summary-row">
              <span>Subtotal</span>

              <strong>
                Rs. {cartTotal.toLocaleString()}
              </strong>
            </div>

            <div className="summary-row">
              <span>Delivery</span>

              <span>
                Calculated at checkout
              </span>
            </div>

            <div className="summary-total">
              <span>Total</span>

              <strong>
                Rs. {cartTotal.toLocaleString()}
              </strong>
            </div>

            <button className="primary-button checkout-button">
              Proceed to Checkout
            </button>

          </aside>

        </div>

      </div>

    </main>
  );
}

export default Cart;