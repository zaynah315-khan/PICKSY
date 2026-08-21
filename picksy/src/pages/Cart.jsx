 import { useState } from "react";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";

function Cart({
  cart,
  cartTotal,
  onRemove,
  onUpdate
}) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    setOrderPlaced(true);
  };

  // Order successfully placed
  if (orderPlaced) {
    return (
      <main className="cart-page">
        <div className="empty-cart order-success">

          <div className="success-icon">
            ✓
          </div>

          <p className="eyebrow">
            ORDER CONFIRMED
          </p>

          <h1>
            Order placed successfully!
          </h1>

          <p>
            Thank you for shopping with Picksy.
            <br />
            Your order has been received successfully.
          </p>

          <Link
            to="/"
            className="primary-button"
          >
            Continue Shopping
          </Link>

        </div>
      </main>
    );
  }


  // Empty cart
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

          {/* Cart Items */}

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


          {/* Order Summary */}

          <aside className="cart-summary">

            <h2>
              Order Summary
            </h2>

            <div className="summary-row">

              <span>
                Subtotal
              </span>

              <strong>
                Rs. {cartTotal.toLocaleString()}
              </strong>

            </div>


            <div className="summary-row">

              <span>
                Delivery
              </span>

              <span>
                Calculated at checkout
              </span>

            </div>


            <div className="summary-total">

              <span>
                Total
              </span>

              <strong>
                Rs. {cartTotal.toLocaleString()}
              </strong>

            </div>


            <button
              className="primary-button checkout-button"
              onClick={handleCheckout}
            >
              Proceed to Checkout
              <span>→</span>
            </button>

          </aside>

        </div>

      </div>

    </main>
  );
}

export default Cart;